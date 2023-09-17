import { getProductFailure, getProductStart, getProductSuccess } from "../Redux/Features/ProductSlice.js"
import axios from "axios";

export const getAllProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await axios.get("https://multivendorapi.onrender.com/");
        dispatch(getProductSuccess(res?.data));
    } catch (e) {
        const error = e ? "Something Went Wrong" :"Network Error";
        dispatch(getProductFailure(error));
    }
}
export const getProductById = async (id) => {
    
    try {
        const res = await axios.get(`https://multivendorapi.onrender.com/${id}`);
        return res?.data;
    } catch (e) {
        const error = e ? "Something Went Wrong" :"Network Error";
        return error;
    }
}
