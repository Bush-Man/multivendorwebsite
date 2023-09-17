import { loginFail, loginStart, loginSuccess, logoutFail, logoutStart, logoutSuccess } from "../Redux/Features/AuthSlice.js";
import axios from "axios";
// const user = {
//  "email":"bushman@d.com",
//   "password":"12345678"
// }
export const login = async(dispatch,user) => {
    dispatch(loginStart());
    
    try {
        const res = await axios.post("https://multivendorapi.onrender.com/api/v1/auth/login-user", user,{withCredentials:true});
        dispatch(loginSuccess(res.data));
       
    } catch (e) {
         const error = e.response ? e.response.data.error : "Please Try Again.";
        if (error) {
            dispatch(loginFail(error));
            
        }
       
    }
}
export const logout = async (dispatch, id) => {
  dispatch(logoutStart());
  try {
    const res = await axios.post("https://multivendorapi.onrender.com/api/v1/auth/logout", id,{ withCredentials: true });
    console.log(res);
    dispatch(logoutSuccess(res.data.message));
  } catch (error) {
    dispatch(logoutFail("Something Went Wrong"));
  }
}
export const register = async (user) => {
    try {
        const res = await axios.post("https://multivendorapi.onrender.com/api/v1/auth/register-user", user, { withCredentials: true });
        return { message: res.data.message };
       
    } catch (e) {
        if (e.response) {
            // Handle specific error cases if needed
            return { error: e.response.data.error || "An error occurred during registration." };
        } else {
            return { error: "Network error. Please try again later." };
        }
        
    }
}       
//replace register later with
/**
 export const register = async (user) => {
  try {
    const res = await axios.post("http://localhost:5000/api/v1/auth/register-user", user, { withCredentials: true });
    return { data: res.data.message };
  } catch (e) {
    if (e.response) {
      // Handle specific error cases if needed
      if (e.response.status === 400) {
        return { error: "Invalid input data. Please check your registration details." };
      }
      // Handle other error cases
      return { error: e.response.data.error || "An error occurred during registration." };
    }
    return { error: "Network error. Please try again later." };
  }
};
 */
