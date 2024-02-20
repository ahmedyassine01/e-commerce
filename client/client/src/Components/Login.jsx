import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { userLogin } from "../redux/actions/actions";
import '../Css/login.css'; // Import the CSS file

export const Login = () => {
  const {  loading, isAuth } = useSelector((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123456");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(userLogin(user));
  };
  return (
    <div className="login-container">
      {loading ? (
        <>
          <h1>Loading ...</h1>
        </>
      ) : localStorage.getItem("token") ? (
        <Navigate to="/profile" />
      ) : (
        <>
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>Email</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="Password"
                  placeholder="Password"
                  name="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Login</Button>
          </Form>
          <Link to="/">
            you don't have an acount
            <br />
            go to SignUp
          </Link>
        </>
      )}
    </div>
  );
};
