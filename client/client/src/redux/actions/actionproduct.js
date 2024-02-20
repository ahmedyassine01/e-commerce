import axios from "axios";
import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS } from "../actiontypes/actionTypes";
import { GET_ALL_PRODUCTS, UPDATE_PRODUCT } from "../actiontypes/actionproducttype";




export const getAllProducts = () => async(dispatch) => {
    try {
      const res = await axios.get("/product/getAllProduct");
      dispatch (
        {
        type : GET_ALL_PRODUCTS,
        payload : res.data
        }
      );
    } catch (error) {
      alert("get all products error")
    }
  };

export const addProduct = (product) => async (dispatch) => {
    dispatch(
      {
          type:ADD_PRODUCT,
      })
      try {
          const  res = await axios.post('/product/addProduct', product);
          console.log("res",res)
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
  export const editeProduct = (product) => async(dispatch) => {
    try {
        const res = await axios.put(`/product/updateProduct/${product._id}`, product);
        dispatch(
            {
                type : UPDATE_PRODUCT,
                payload : res.data
            }
        )
    } catch (error) {
        alert("update product error");
    }
  };