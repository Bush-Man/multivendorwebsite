
import image1 from "../../../assets/61bxFyNWeGL._AC_AA180_.jpg";
import "./CartItem.scss";
  
const CartItem = () => {
     const products = [
         {
             id: 1,
             name: 'create a table using html with the fields product name quantity total and cancel in react quantity has add and remove item button and the product name also has an image and the name',
             quantity: 1,
             price: 1000,
             originalPrice: '3.78',
             discountPrice: '2.56',
             stock: 30
         },
   
     
     ]
  return (
    <div className='Cart_Item'>
          
          <div className="cart_top">
              <div className="item_image">
                    <img src={image1} alt="" />
              </div>
              
              <div className="item_info">
                  <div className="item_title">
                  <span>{products[0].name}</span>
              </div>
                  <div className="item_prices">
                      <span className="discount_price">
                       {`Discount Price: $ ${products[0].discountPrice}`}
                  </span>
                  <span className="original_price">
                      {`$ ${products[0].originalPrice}`}
                  </span>
                  </div>
                  <div className="item_stock">
                       {`Remaining: ${products[0].stock} units`}
                  </div>
              </div>
          </div>
          <div className="cart_bottom">
              <span className="delete_item">
                  REMOVE
              </span>
              <div className="add_rem_quantity">
                  <span className="add_quantity">+</span>
                  <span className=''>{products[0].quantity}</span>
                  <span className="sub_quatity">-</span>
              </div>
          </div>
    </div>
  )
}

export default CartItem