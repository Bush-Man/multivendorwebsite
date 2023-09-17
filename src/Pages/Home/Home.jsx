
import "./Home.scss"
import { useEffect,useMemo } from "react";

import { useDispatch,useSelector } from "react-redux";

import { getAllProducts } from "../../ApiRequests/ProductsRequest.js";
import { Deals, DownloadAppCard, Hero, Info, NewsLetterCard,TopCategories } from '../../AllExports.js'
import Card from "../../Components/Card/Card";
const Home = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.products);
  
  const memoizedProducts = useMemo(() => allProducts, [allProducts]);
  
  
  useEffect(() => {
    const fetchProducts = async () => {
      await getAllProducts(dispatch);
    }
    fetchProducts()
  }, [dispatch]);
  
  return (
      <div className='home'>
          <div className="c-home">
              <Hero />
        <Info />
        
          <h3 className="home_item_title">Todays Deals,Offers And Discounts</h3>
           <Deals>
          {
           memoizedProducts && Array.isArray(memoizedProducts) && memoizedProducts?.map((item,index) =>(
              <Card
                key={index}
  id={item._id}
  title={item.title}
  category={item.category}
  description={item.description}
  discountPrice={item.discountPrice}
  imageUrl={item.imageUrl}
  originalPrice={item.originalPrice}
  stock={item.stock}
/>
            )
              
              )
      }

          </Deals>
          
        
       
        
              
        <TopCategories />
      <h3 className="home_item_title">Laptops</h3>
        
       <Deals>
          {
           memoizedProducts && Array.isArray(memoizedProducts) && memoizedProducts?.map((item,index) =>(
              <Card
                key={index}
  id={item._id}
  title={item.title}
  category={item.category}
  description={item.description}
  discountPrice={item.discountPrice}
  imageUrl={item.imageUrl}
  originalPrice={item.originalPrice}
  stock={item.stock}
/>
            )
              
              )
      }

        </Deals>
        <h3 className="home_item_title">Watches And Jewelery</h3>
         <Deals>
          {
           memoizedProducts && Array.isArray(memoizedProducts) && memoizedProducts?.map((item,index) =>(
              <Card
                key={index}
  id={item._id}
  title={item.title}
  category={item.category}
  description={item.description}
  discountPrice={item.discountPrice}
  imageUrl={item.imageUrl}
  originalPrice={item.originalPrice}
  stock={item.stock}
/>
            )
              
              )
      }

        </Deals>
        

        <DownloadAppCard />
        <h3>Apparel And Cloathing</h3>
         <Deals>
          {
           memoizedProducts && Array.isArray(memoizedProducts) && memoizedProducts?.map((item,index) =>(
              <Card
                key={index}
  id={item._id}
  title={item.title}
  category={item.category}
  description={item.description}
  discountPrice={item.discountPrice}
  imageUrl={item.imageUrl}
  originalPrice={item.originalPrice}
  stock={item.stock}
/>
            )
              
              )
      }

        </Deals>
      <Deals />
      <NewsLetterCard />
          </div>
    </div>
  )
}

export default Home