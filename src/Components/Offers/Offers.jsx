import image1 from "../../assets/3.jpg"
import image2 from "../../assets/4.jpg"
import './Offers.scss';
import OfferCard from "../OfferCard/OfferCard.jsx";
const Offers = () => {
  return (
      <div className="offers hide-scroll">
          <div className="container hide-scroll">
          <OfferCard imag={image1}/>
          <OfferCard imag={image2}/>
          <OfferCard imag={image1}/>
          </div>
         
          
    </div>
  )
}

export default Offers