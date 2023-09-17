import { useState } from 'react';
import "./TBar1.scss";
import { AllCats } from '../../Data/All';
import AccountIcon from "../../assets/account.png";
import Orders from "../../assets/orders.png";
import Cart from "../../assets/cart.png";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../ApiRequests/AuthRequests.js';
const TBar1 = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const { cartquantity } = useSelector((state) => state.cart);
    const { currentBuyer } = useSelector((state) => state.user);
    const navigate = useNavigate()
    const handleLogout = (e) => {
        e.preventDefault();
        logout(dispatch, currentBuyer._id);
        localStorage.removeItem("user");
        navigate("/")
    }
  return (
      <div className='tBar1'>
          <Link to="/" className="sBarleft">
              <h3>MyShop</h3>
          </Link>
          <div className="sBarCenter">
              <div className='selectItem'>
                  <select >
                  
                  {
                          AllCats.mainCat.map(cat => <option value={value} key={cat.id} onChange={(e) => setValue(e.target.value)}>
                          {cat.cat} 
                      </option>)
                  }
                 
              </select>
              </div>
              
              <div className="searchCont">
                  <input type="search" name="" className='search' placeholder='Search for items...' />
                  <button className="btnSearch">Search</button>
            
          </div>
          
          </div>
          <div className="sBarRight">
              <Link to="/login" className='icon'>
                  <img src={AccountIcon} alt=""  className='acctIcon'/>
                  {
                      currentBuyer?._id ? <span onClick={handleLogout}>LogOut</span>:<Link to="/login">LogIn</Link>
                  }
                  
              </Link>
              <div className='icon'>
                  <img src={Orders} alt="" />
                  <span>Orders</span>
                  <span className='badge'>0</span>
              </div>
              <Link to="/cart" className='icon'>
                  <img src={Cart} alt="" />
                  <span>Cart</span>
                  <span className='badge'>{cartquantity}</span>
              </Link>

              


              
                  
              
              
          </div>
    </div>
  )
}

export default TBar1