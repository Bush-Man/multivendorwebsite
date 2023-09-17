
import "./NewsLetterCard.scss";
const NewsLetterCard = () => {
  return (
      <div className='newsLetterCard'>
        <div className="container">
        <div className="div1">
          <h1>Join our NewsLetter Today.</h1>
          <p>To get news on discounts, coupons and new-products.</p>
        </div>
        <div className="div2">
                  
                  <input type="email" required placeholder='Subscribe to our newsletter.' />
                  <button className="">SUBSCRIBE</button>
          </div>
        </div>
        
    </div>
  )
}

export default NewsLetterCard