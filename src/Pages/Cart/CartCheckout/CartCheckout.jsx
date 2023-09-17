import React, { useState } from 'react'
import "./CartCheckout.scss";
import { useNavigate } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';

import { useDispatch, useSelector } from 'react-redux';
import { resetPersistedCartState } from '../../../Redux/Features/CartSlice.js';
import Toaster from '../../../Components/Toaster/Toaster.jsx';
import { checkOutHandler } from '../../../ApiRequests/CheckOutRequest.js';


//'pk_test_51NpLwMGDxpU6TGZ5T8rfny5yV9zwdzQkzXpnxATpu8wWGIpac0pXzQEnAbsNR9Lb7wus6HjFFrnZzSxdycWXQQll00z20hTJQG'
//'pk_test_51NpLwMGDxpU6TGZ5T8rfny5yV9zwdzQkzXpnxATpu8wWGIpac0pXzQEnAbsNR9Lb7wus6HjFFrnZzSxdycWXQQll00z20hTJQG'

const CartCheckout = () => {
    const stripePromise = loadStripe('pk_test_51NpLwMGDxpU6TGZ5T8rfny5yV9zwdzQkzXpnxATpu8wWGIpac0pXzQEnAbsNR9Lb7wus6HjFFrnZzSxdycWXQQll00z20hTJQG');
    const { cartproducts, cartquantity, total } = useSelector((state) => state.cart);
    const { currentBuyer } = useSelector((state) => state.user);
    const { sessionId, checkoutLoading, checkoutError } = useSelector((state) => state.checkout);
    let message;

    const disabled = [cartproducts.length === 0 , checkoutLoading , checkoutError ,currentBuyer == null];
    if (disabled[0]) {
        message ="No Items Selected";
    }else if(disabled[1]) {
        message="Loading...";
    }else if(disabled[2] !== null) {
        message= "Try Again";
    } else if (currentBuyer == null) {
        message = "Login To Buy"
    }
  const [showToast, setShowToast] = useState(false);
    const [stripeToast, setStripeToast] = useState(false);
    const dispatch = useDispatch();
     
    const handleCheckOut = async() => {
        if (!currentBuyer) {
            setShowToast(true);
           // navigate("/login");
        }
        try {
            const stripePay = await stripePromise;
            checkOutHandler(dispatch, cartproducts);
            sessionId && setStripeToast(true);
            sessionId && await stripePay.redirectToCheckout({ sessionId: sessionId });
            
            if (sessionId) {
               
               await localStorage.setItem("cart", JSON.stringify({ cartproducts: [], cartquantity: 0, total: 0 }));
                dispatch(resetPersistedCartState()); 
            } 


        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className='cartCheckOut'>
        
           { showToast ? <Toaster text="Login To Complete CheckOut" type="error" duration={5000} /> : null
             
            }
            {
             stripeToast? <Toaster text="Redirecting You To Stripe To Complete Purchase" type="success" duration={5000} />  : null
            }
        
          
          
          <h3>CART SUMMARY</h3>
          <div className='cc-item'>
              <label>Total Items:</label>
              <span>{cartquantity} items</span>
          </div>
          <div className='cc-item'>
              <label>Total Amount:</label>
              <span>{`$ ${total}`}</span>
          </div>
          <button className='cc-Btn' onClick={handleCheckOut} disabled={disabled[0] || disabled[1] || disabled[2]!==null ||disabled[3]}>
  { message || `Proceed To Pay ($${total})` }
</button>

      </div>
  )
}

export default CartCheckout