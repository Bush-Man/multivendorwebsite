import React from 'react'
import "./SellerRegstraton.scss";
const SellerRegistration = () => {
  return (
      <div className='registerSeller'>
          <div className="regContainer">
              
         
          <h3>Create Seller Account.</h3>
              <form className='form'> 
                  <div className="formContainer">
                      
                 
                      <div className="leftSide">
                          <h2 className='rSH2'>Seller Information</h2>
            <div className='formItem'>
            <span>

              <label>First Name</label>
              <input type="text" placeholder='first name' />
            </span>
            <span>
              <label>Second Names</label>
              <input type="text" placeholder='second name' />
            </span>
                  
              </div>
              <div className='formItem'>
               <span>

              <label>Email</label>
              <input type="email" placeholder='email' />
            </span>
            <span>
              <label>Phone Number</label>
              <input type="text" placeholder='Phone Number' />
            </span>
                  
              </div>
          <div className='formItem'>
            <span>
               <label>Password</label>
              <input type="password" placeholder='password' />
            </span>
            <span>
              <label>Re-enter password</label>
              <input type="password" placeholder='re-enter password' />
            </span>
                   
              </div>
                      
                  </div>
         
                  <div className="rightSide">
                          <h2 className='rSH2'>Shop Information</h2>
            <div className='formItem'>
              <label>Shop Name</label>
              <input type="text" placeholder='first name'/>      
            </div>
            <div className='formItem'>

              <label>Shop Location</label>
              <input type="text" placeholder='shop location' />
            
                  
              </div>
                          
              </div>
              
                      
                  </div>
                  <button type="submit" className='btnReg'>Register</button>
          </form>
          
              <div className='regBottom'>
                  <p>
              By creating an account, you agree to the Conditions of Use and Privacy Notice.
                </p>
              <p>
                  Already have an account? <span>Sign in</span>
              </p>
        </div>
     </div>
    </div>
  )
}

export default SellerRegistration