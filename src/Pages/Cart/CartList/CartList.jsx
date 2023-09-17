
import CartItem from '../CartItem/CartItem'
import "./CartList.scss";
const CartList = () => {
  return (
      <div className='Cart_List'>
          <div className="cart_list_container">
              <CartItem />
          </div>
    </div>
  )
}

export default CartList