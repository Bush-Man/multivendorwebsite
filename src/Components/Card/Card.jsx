/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.scss";
import { ProgressBarComponent, Rating } from "../../AllExports.js";
import { useState } from "react";
const Card = ({
  title,
category,
id,
discountPrice,
imageUrl,
originalPrice,
  stock}) => {
  
  const [productRating, setProductRating] = useState(3); // Initial product rating
  const handleRatingChange = (newRating) => {
    // Update the product's rating in your data or state
    setProductRating(newRating);
  };
  return (
    <div className="card">
      <Link link to={`/product/${id}`} className="card_link">
     
          <img src={imageUrl} alt="" />
           <span className="discountPct"><span style={{fontWeight:"800",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"4px", marginTop:"-5px",fontSize:"18px"}}>-</span>{`${Math.floor(((originalPrice - discountPrice)/originalPrice)*100)} %`}</span>
          <div className="bottom">
              <div className="prices">
                  <span className="newPrice">{`$ ${discountPrice}`}</span>
                  <span className="oldPrice">{`$ ${originalPrice}`}</span>
              </div>
              <span className="itemName">{title}</span>
          <span>{category}</span>
          <span className="product_rating">

            <Rating initialRating={productRating} onRatingChange={handleRatingChange} />
            <span>{`(${productRating})`}</span>
          </span>
          <span>{`Remaining : ${stock}`}</span>
        <ProgressBarComponent current_stock={stock} total_stock={7}/>
          </div>
 </Link>
    </div>

  )
}

export default Card