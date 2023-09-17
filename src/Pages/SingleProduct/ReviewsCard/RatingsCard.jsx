import React from 'react'
import "./RatingsCard.scss";
import { Rating } from '../../../AllExports';
import { Link } from 'react-router-dom';
const RatingsSummaryCard = () => {
  //{ rateValueTotal, totalRatings}
  //const percentage = rateValueTotal / totalRatings * 100;
  // <div className='rate' width={`${50}%`}>{`(3)`}</div>
  return (
    <div className='Ratings_Summary_Card'>
      <div className="Ratings_Summary_Card_container">
        <p className='intro_p'>
          This is a Summary of all ratings for this product from all buyers,
          if you want to also read its reviews <Link to="/review/:id" className="to_reviews">CLICK THIS HERE</Link>
        </p>
    
      <div className='rate' >
        <Rating initialRating={5}/>
        <span className='total'>100</span>
       </div>
      <div className='rate'>
        <Rating initialRating={4} />
        <span className='total'>70</span>
      </div>
      <div className='rate'>
        <Rating initialRating={3}/>
        <span className='total'>150</span>
      </div>
      <div className='rate'>
        <Rating initialRating={2}/>
        <span className='total'>10</span>
      </div>
      <div className='rate'>
        <Rating initialRating={1}/>
        <span className='total'>1</span>
       </div>
      
    </div>
         
    </div>
  )
}

export default RatingsSummaryCard