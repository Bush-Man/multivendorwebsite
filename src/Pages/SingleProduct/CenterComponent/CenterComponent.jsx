
import "./CenterComponent.scss";
import Reviews from './ReviewsComponent/Reviews';
const CenterComponent = () => {
  return (
      <div className='centerComponent'>
          <div className="container">
              <div className="top">
                  <h3>Warranty</h3>
                  <span>
                      1 Year Comprehensive Warranty on Product and Additional 1 Year Warranty on PanelKnow More
                  </span>
              </div>
              <div className="center">
                  <h3>Product Details</h3>
                  <span>
                      The 32 inch, HD Smart Android LED TV features sharply and vividly conveys the colour of the image making it true to life as you view it. Enjoy access to youtube , netflix, Facebook and many more apps with ease. It carries a powerful multi-surround sound effect the increases the excitement and takes your normal sports watching a pleasurable experience. TV comes with Smart features like a dedicated web browser and popular apps like YouTube and a range of movie on demands services. Playback your stored content directly on the big screen for all to enjoy via a USB device or use it to record TV programmes and even pause live TV. Place your order for this amazing product from Jumia Kenya and have it delivered to your doorstep at an amazing price
                  </span>
              </div>
              <div className="bottom">
                  <h3>Specifications</h3>
              </div>
              <Reviews />

          </div>
    </div>
  )
}

export default CenterComponent