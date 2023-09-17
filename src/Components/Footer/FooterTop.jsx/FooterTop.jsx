import { Link } from "react-router-dom";
import "./FooterTop.scss";

const FooterTop = () => {
  return (
      <div className="footerTop">
          <div className="item">
              <h3>Customer Service</h3>
              <div>
                  <Link to="/customercare">Help Center</Link>
                  
                  <Link to="/faqs">FAQS</Link>
              </div>
          </div>
          <div className="item">
              <h3>Get to Know Us</h3>
              <div>
                  <Link to="/blog">Blog</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/jobs">Careers</Link>
                  <span>Investors</span>
              </div>
          </div>
          <div className="item">
              <h3>Location & Contacts</h3>
              <div>
                <span>Nairobi,Kenya</span>
                  <span>0722200664</span>
              </div>
          </div>
          <div className="item">
              <h3>Join Us</h3>
              <div>
                  <span>Sell Your Products on Myshop</span>
                  <span>Affiliate Program</span>
                  <span>Advertise Your Products</span>
                  <Link to="/register">Create An Account</Link>

              </div>
          </div>
          
          <div className="item">
              <h3>Quick Links</h3>
              <div>
                  <span>My Account</span>
                  <Link to="/registerseller">Become a Seller</Link>
                  <span>Join Our Affiliate Program</span>
                  <span>Terms & Conditions</span>
              </div>
          </div>
           <div className="item">
              <h3>Quick Links</h3>
              <div>
                  <span>My Account</span>
                  <Link to="/registerseller">Become a Seller</Link>
                  <span>Join Our Affiliate Program</span>
                  <span>Terms & Conditions</span>
              </div>
          </div>
          
    </div>
  )
}

export default FooterTop