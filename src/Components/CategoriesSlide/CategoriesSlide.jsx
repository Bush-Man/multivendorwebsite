import "./CategoriesSlide.scss";
import GardenHoeImage from '../../assets/Garden.jpg';
import ApparelAndClothing from '../../assets/ApparelAndClothing.jpg';
import ArtAndCraft from '../../assets/arts.jpg';
import Automitive from '../../assets/Automitive.jpg';
import BooksAndMedia from '../../assets/Books And Media.jpg';
import Electronics from '../../assets/Electronics.jpg';
import Health from '../../assets/Health.jpg';
import Machinery from '../../assets/Machinery.jpg';
import OfficeAndStationery from '../../assets/Office And Stationery.jpg';
import Outdoor from '../../assets/Outdoor.jpg';
import ToysAndGames from '../../assets/Toys And Games.jpg';
import TravelAndLagguage from '../../assets/Travel And Lagguage.jpg';
import WatchesAndJewwelry from '../../assets/watch.jpg';


const CategoriesSlide = () => {
  return (
    <div className="categories_slide hide_scroll_bar">
         <h3 style={{fontSize:"20px"}}>Shop By Category</h3>
      <div className="categories_container hide_scroll_bar">
  <div className="category_item">
          <div className="image_container">
            <img src={WatchesAndJewwelry} alt="" className="category_item_image move-on-hover " />
      </div>
  <span >Watches</span>
</div>
      
        <div className="category_item">
          <div className="image_container">
          <img src={ApparelAndClothing} alt="" className="category_item_image move-on-hover"/>

          </div>
       <span>Apparel</span>
        </div>
        

    <div className="category_item">
          <div className="image_container">
  <img src={Electronics} alt="" className="category_item_image move-on-hover" />

          </div>
  <span>Electronics</span>
</div>

        <div className="category_item">
          <div className="image_container">

  <img src={OfficeAndStationery} alt="" className="category_item_image move-on-hover "  />
          </div>
  <span>Office</span>
</div>


        <div className="category_item">
          <div className="image_container">
  <img src={BooksAndMedia} alt="" className="category_item_image move-on-hover" />

          </div>
  <span>Books</span>
</div>



        <div className="category_item">
          <div className="image_container">

  <img src={Health} alt="" className="category_item_image move-on-hover" />
          </div>
  <span>Health</span>
</div>

        <div className="category_item">
          <div className="image_container">

  <img src={Machinery} alt="" className="category_item_image move-on-hover" />
          </div>
  <span>Machinery</span>
</div>



        <div className="category_item">
          <div className="image_container">

  <img src={Outdoor} alt="" className="category_item_image move-on-hover" />
          </div>
  <span>Outdoor</span>
</div>

        <div className="category_item">
          <div className="image_container">
  <img src={ToysAndGames} alt="" className="category_item_image move-on-hover" />

          </div>
  <span>Games</span>
</div>

        <div className="category_item">
          <div className="image_container">

  <img src={TravelAndLagguage} alt="" className="category_item_image move-on-hover" />
          </div>
  <span>Travel</span>
</div>

        <div className="category_item">
          <div className="image_container">

  <img src={ArtAndCraft} alt="" className="category_item_image " />
          </div>
  <span>Art</span>
</div>

        <div className="category_item">
          <div className="image_container">
  <img src={GardenHoeImage} alt="" className="category_item_image move-on-hover" />
          </div>
            
  <span>Garden</span>
</div>

        <div className="category_item">
          <div className="image_container">

  <img src={Automitive} alt="" className="category_item_image move-on-hover" />
          </div>
  <span>Automotive</span>
</div>

        
          </div>
          
    </div>
  )
}

export default CategoriesSlide