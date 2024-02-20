import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGN_UP, SIGN_UP_FAIL,SIGN_UP_SUCCESS } from "../actiontypes/actionTypes"
import axios from "axios";

export const userSignUp=(newUser)=>async(dispatch)=>{
    dispatch({type:SIGN_UP})
    try {
        const res=await axios.post("/user/signUp",newUser);
        console.log("res=",res.data)
        dispatch({
            type:SIGN_UP_SUCCESS,
            payload:res.data,
        })
    } catch (error) {
        dispatch({
            type : SIGN_UP_FAIL,
            payload:error.response.data,
        });
    }
    
};

export const userLogin=(user)=>async(dispatch)=>{
    dispatch({type:LOGIN})
    try {
        const res=await axios.post("/user/login",user)
        localStorage.setItem("token",res.data.token)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data,
        });
    } catch (error) {
        dispatch({
            type : LOGIN_FAIL,
            payload:error.response.data,
        });
    }
};

export const getUserProfile=()=>async(dispatch)=>{
    dispatch({
        type:GET_PROFILE
    })
    const  token = localStorage.getItem('token');
    const config={
        headers:{
            Authorization: token
        }
    }
    try {
        const res=await axios.get("/user/auth",config)
        console.log(res)
        dispatch({
            type:GET_PROFILE_SUCCESS,
            payload:res.data,
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type : GET_PROFILE_FAIL,
            payload:error,
        });
        
    }
};
export const userLogout=()=>{
    return{
        type:LOGOUT,
        payload:localStorage.clear()
    }
};

export const addProduct = (product) => async (dispatch) => {
  dispatch(
    {
        type:ADD_PRODUCT
    })
    try {
        const  res = await axios.post('/products', product);
        console.log(res)
        dispatch({
            type: ADD_PRODUCT_SUCCESS,
            payload: res.data
        });
        
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: ADD_PRODUCT_FAIL,
            payload:error,
        });
        
    }
  
};