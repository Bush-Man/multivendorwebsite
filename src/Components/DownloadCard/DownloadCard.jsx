import './DownloadCard.scss';
import appImg from "../../assets/app.png";
import appStoreImg from "../../assets/app-store.png";
import googleStoreImg from "../../assets/google-play.png";
const DownloadCard = () => {
  return (
      <div className='downloadCard'>
          <div className="container">
              <div className="left">
                  <img src={appImg} alt="" />
              </div>
              <div className="right">
                  <h1>Download MyShop App Now.</h1>
                  <p>Shop faster and more easily with our app,<br />for all Apple and Android users.</p>
                  <div className='newsLetter'>     
                      <input type="email" name="" id="" required placeholder='Subscribe to our newsletter.' />
                      <button className='newsLetterBtn'>SUBSCRIBE</button>
                  </div>
                  <div className='storeLinks'>
                      <img src={googleStoreImg} alt="" />
                      <img src={appStoreImg} alt="" />
                  </div>
              </div>
          </div>
          
    </div>
  )
}

export default DownloadCard