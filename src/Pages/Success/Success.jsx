import React from 'react'
import "./Success.scss";
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Success = () => {
  const navigate = useNavigate();
  setTimeout(() => navigate("/"), 5000);
  //const location = useLocation()
  //console.log(location.pathname.split("/")[1]);
  return (
    <div className='Success'>
      <p > You Successfully Completed Your Purchase <br/> Redirecting To Home Page <br />Thank You. </p>
                 <Link to="/">Go Back</Link>
    </div>
  )
}

export default Success
