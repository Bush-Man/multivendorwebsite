/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react'
import "./Login.scss";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../ApiRequests/AuthRequests.js';
import { ToasterComponent } from '../../AllExports';
const Login = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const { currentBuyer, isLoading, error } = useSelector((state) => state.user);
  const { cartproducts } = useSelector((state) => state.cart);
 
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { email: email.current.value, password: password.current.value });
    if (currentBuyer && cartproducts?.length >0) {
      navigate("/cart");
    }
     if(currentBuyer) {
       navigate("/");
     }
   
  
  }
  

  return (
    <div className='login'>
      <div className="loginContainer">
         <span style={{ display: error? "Block" : "none" ,color:"red"}}>{`*${error}`}</span>
        <h3>Login To Your Account</h3>
        <form className='form' onSubmit={handleSubmit}>
          <div className='formItem'>
            <label>Email</label>
            <input type="email" placeholder='email' required ref={email}/>
                  
          </div>
          <div className='formItem'>
            <label>Password</label>
            <input type="password" placeholder='password' required ref={password} />
                  
          </div>
              
              
          <button type="submit" className='btnLogin'  disabled={isLoading}>{isLoading? "Loading...":"Login"}</button>
        </form>
          
        <div className='logBottom'>
                
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  )

}


export default Login
