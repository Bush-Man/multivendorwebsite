import  { useState } from 'react'
import "./Register.scss";
import { register } from '../../ApiRequests/AuthRequests.js';
import { useNavigate } from 'react-router';
const Register = () => {

  const [data, setData] = useState({ username: "", email: "", password: "", passwordConfirm: "" });
  const [response, setResponse] = useState({ message: "", error: "" });
  const navigate = useNavigate();
  const checkErrors = () => {
    if (!(data.password === data.passwordConfirm)) {
      window.alert("Passwords are not same");
    }
  }
 console.log(response);
  const handleChange = (e) => {
  setData((prevData) => ({
    ...prevData,
    [e.target.name]: e.target.value,
  }));
};
  //to be tested
  const handleSubmit = async (e) => {
    e.preventDefault();
    checkErrors();
    const {message, error } = await register({ email: data.email, password: data.password, username: data.username });
    if (message) {
      
      setResponse((prev) => ({ ...prev, message: message, error: "" }));
      console.log(message);
      setTimeout(()=>navigate("/"), 5000);
      
    }
    if (error) {
      return setResponse((prev) => ({ ...prev, message: "", error:error }));
}
   // response.failed && response.failed !== error && setError(response.failed);
  //resetForm();
  }
 
  // const resetForm = () => {
  //   setData({
  //     ...data,
  //     name: "",
  //     email: "",
  //     password: "",
  //     passwordConfirm: ""
  //   })
  // }
  return (
    <div className='register'>
       <div className="regContainer">
             
        
          <h3>Create An Account.</h3>
          <form className='form' onSubmit={handleSubmit}> 
              <div className='formItem'>
                <label>Names</label>
              <input type="text" placeholder='names' name="username" value={data.username} required onChange={handleChange}/>
                  
              </div>
              <div className='formItem'>
              <label>Email</label>
              <input type="email" placeholder='email'  name="email" value={data.email} required onChange={handleChange}/>
                  
              </div>
                  
              <div className='formItem'>
                <label>Password</label>
              <input type="password" placeholder='password' name="password" value={data.password} required onChange={handleChange}/>
                  
              </div>
              <div className='formItem'>
                <label>Re-enter password</label>
              <input type="password" placeholder='re-enter password' required name="passwordConfirm" value={data.passwordConfirm} onChange={handleChange}/>
                  
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

  
export default Register