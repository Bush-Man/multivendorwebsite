import {useState} from 'react'
import image1 from "../../../assets/61bxFyNWeGL._AC_AA180_.jpg";
import ReactHtmlParser from 'html-react-parser';
import "./CartTable.scss";
import { useSelector } from 'react-redux';
const CartTable = () => {
  const {cartproducts} = useSelector((state) => state.cart);
  console.log(cartproducts);

 

  const handleAddQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleRemoveQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleCancel = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

    return (
      
      <>
        {cartproducts?
          <table className='table hide_scroll_bar'>
            <thead className='thead'>
              <tr className='trheader'>
                <th>Products</th>
                <th></th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className='tBody'>
              {cartproducts?.length > 0 && cartproducts?.map((product) => (
                <tr key={product && product?._id} className='trBody'>
                  <td style={{ width: "60px" }}>
                    <img src={product ? (product.imageUrl || "") : ""} alt={product?.title} width="50" height="50" />
                  </td>
                  <td style={{ fontSize: "14px", width: "450px" }}>
                    {
                      ReactHtmlParser(product ? (product?.description?.slice(0, 60) || "") : "")
                    }
                    <br />
                    <div className='product_info_table'>
                      <span className='newPrice'>{`Discount: $ ${product?.discountPrice}`}</span>
                      <span className='oldPrice'>{`Normal: $ ${product?.originalPrice}`}</span>
                      <span>{`Stock: ${product?.stock}`}</span>

                    </div>
                  </td>
                  <td style={{ width: "fitContent" }}>
                    <button onClick={() => handleRemoveQuantity(product.id)}>-</button>
                    <span style={{ margin: "0px 15px" }}>{product?.quantity}</span>
                    <button onClick={() => handleAddQuantity(product.id)}>+</button>
                  </td>
                  <td style={{ width: "fitContent" }}>{`$ ${product?.quantity * product?.discountPrice}`}</td>
                  <td>
                    <button className='btn_remove' onClick={() => handleCancel(product.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table >
          : <h3 style={{position :"absolute"}}>Hi Your Cart Is Empty</h3>
        }
    </>
    
               
    )

  }

export default CartTable