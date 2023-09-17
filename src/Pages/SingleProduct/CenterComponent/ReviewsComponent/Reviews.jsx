import SingleReview from "../SingleReview/SingleReview";
import "./Reviews.scss";

const Reviews = () => {
  return (
      <div className="reviews">
      <div className="container">
        <h3 className="h3">Customer Reviews & FeedBack On This Product</h3>
        <div style={{display:"flex", flexDirection:"column",gap:"2rem"}}>

              <SingleReview />
              <SingleReview />
              <SingleReview />
              <SingleReview />
              <SingleReview />
              <SingleReview />
              <SingleReview />
              <SingleReview />
        </div>
          </div>
    </div>
  )
}

export default Reviews