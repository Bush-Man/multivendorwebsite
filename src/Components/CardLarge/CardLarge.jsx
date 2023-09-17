import image from "../../assets/product-img-5.jpg";
import "./CardLarge.scss";
const CardLarge = () => {
  return (
    <div className='cardLarge'>
          <img src={image} alt="" />
          <span>Electronics</span>
          
    </div>
  )
}

export default CardLarge