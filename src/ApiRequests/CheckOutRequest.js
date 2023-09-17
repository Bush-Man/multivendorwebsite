import axios from "axios";
import { checkOutFail, checkOutStart, checkOutSuccess } from "../Redux/Features/CheckoutSlice";

export const checkOutHandler = async(dispatch,cartproducts) => {
    dispatch(checkOutStart());
    
    try {
        const res = await axios.post("http://localhost:5000/api/v1/order/payment", { products: cartproducts }, { withCredentials: true });
        dispatch(checkOutSuccess(res.data.session.id));
       
    } catch (e) {
        dispatch(checkOutFail(e));
       
    }
}