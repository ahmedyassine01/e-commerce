import { userReducer } from "./reducer/reducer";
import {createStore,applyMiddleware,compose}from "redux"
import {thunk} from "redux-thunk"

 const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store=createStore(userReducer,compose(applyMiddleware(thunk),devtools))