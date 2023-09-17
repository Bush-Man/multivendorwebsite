import React from 'react'
import CartTable from './CartTable/CartTable'
import "./Cart.scss";
import CartCheckout from './CartCheckout/CartCheckout';
//import CartList from './CartList/CartList';
const Cart = () => {
  return (
      <div className='cart'>
          <div className="c-Container ">
        <div className="c-left hide_scroll_bar">
          <CartTable />
        </div>
        <div className="c-right">
           <CartCheckout />
        </div>
          </div>
    </div>
  )
}

export default Cart