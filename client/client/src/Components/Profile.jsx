import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, userLogout } from "../redux/actions/actions";
import {useNavigate} from "react-router-dom";
import "../Css/profile.css"; 

const Profile = () => {
  const { user, loading } = useSelector((state) => state);
  const navigate = useNavigate();
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <div className="profile-container">
      {loading ? (
        <>
          <h1>loading...</h1>
        </>
      ) : (
        <>
        <h1>{user.fullName}</h1>
        <h2>{user.email}</h2>
        <h3>{user.phone}</h3>
        </>
      )}
      <button onClick={()=>{dispatch(userLogout());navigate("/login")}}>Logout</button>
    </div>
  );
};

export default Profile;
