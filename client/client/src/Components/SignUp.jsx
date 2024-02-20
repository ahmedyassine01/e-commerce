import React, { useState } from 'react'
import { userSignUp } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import '../Css/signup.css'; 


export const SignUp = () => {
    const  [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newOne={
            fullName,email,password,phone
        };
        dispatch(userSignUp(newOne));
        console.log(newOne)
    }


  return (
    <div className="sign-up-container">
       
        <form onSubmit={handleSubmit} >
        <label>Full Name</label>
        <input type="text" value={fullName} onChange={e=>setFullName(e.target.value)}/>
        <label>Email</label>
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="text" value={password} onChange={e=>setPassword(e.target.value)}/>
        <label>Phone</label>
        <input type="text"  value={phone} onChange={e=>setPhone(e.target.value)}/>
        <div>
            <button type='submit'>
                SignUp
            </button>
        </div>


        </form>
        <Link to="/profile">
            {" "}
        <br />

      go to login 
      </Link>
    </div>
  )
}
