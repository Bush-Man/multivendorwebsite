import "./HelpCenter.scss";
const HelpCenter = () => {
  return (
      <div className="helpCenter">
          <div className="container">
              <h1>MyShop Customer Care</h1>
              <p>Search to get Help.</p>
              <input type="search" name="" id="" required placeholder="search for a solution."  className="searchBox"/>
              <div className="helpItems">
                  <div className="item">
                      <span>icon</span>
                      <span>Order Placement</span>
                  </div>
                  <div className="item">
                      <span>icon</span>
                      <span>Delivery</span>
                  </div>
                  <div className="item">
                      <span>icon</span>
                      <span>Cancellation</span>
                  </div>
                  <div className="item">
                      <span>icon</span>
                      <span>Refund</span>
                  </div>
                  <div className="item">
                      <span>icon</span>
                      <span>Become a Seller</span>
                  </div>
                  <div className="item">
                      <span>icon</span>
                      <span>Track Order</span>
                  </div>
                  <div className="item">
                      <span>icon</span>
                      <span>Forgot Password / <br/>Account Locked</span>
                  </div>
              </div>


          </div>
    </div>
  )
}

export default HelpCenter