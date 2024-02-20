import { init } from "../../../../../modules/user";
import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, UPDATE_PRODUCT } from "../actiontypes/actionproducttype";

export const productReducer = (state = init, { type, payload }) => {
    switch (type) {
  
      case ADD_PRODUCT: 
      return {
          ...state,loading:true
      }
  case ADD_PRODUCT_SUCCESS:
      return {
          ...state, products:[...state.products, payload],loading:false
      }
  case ADD_PRODUCT_FAIL:
      return {
          ...state, error:payload,loading:false
      }
      case UPDATE_PRODUCT:
      return {
          ...state, products:state.products.map( el => el._id === payload._id ?payload :el)
      }
           
      
      
    default:
        return state;
    }
    };
    export default productReducer;