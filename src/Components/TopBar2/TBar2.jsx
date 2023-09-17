
import "./TBar2.scss";
import { Link } from "react-router-dom";
const TBar2 = () => {
  return (
      <div className='tBar2 scrollHidden '>
          <div className="scrollContainer scrollHidden">
              
         
          <div className="left">
              <h3>Shop by Department</h3>
          </div>
          <div className="center">
              <Link to="/">Home</Link>
              <Link to = "/products">Shop Now</Link>
              <Link>Todays Offers</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/faqs">FAQS</Link>
              <Link to="/customercare">Customer Care</Link>
          </div>
          <div className="right">
             <Link to="/registerseller"> Sell with Us</Link>
             <span> Track Your Order</span>
              <span>WishList</span>
          </div>
</div>
    </div>
  )
}

export default TBar2