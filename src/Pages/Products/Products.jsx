
import { Checkbox } from "@mui/material";
import { ProductCard } from "../../AllExports";
import "./Products.scss";
const Products = () => {
  return (
      <div className="products">
          <div className="container">
              
              <div className="left">
                  
                  <div className="productCategories">
                      <h3>All Categories</h3>
                      <div className="list scrollerr">
<div className="list-scroller scrollerr">
                              
                         
                      <span>Home Improvements</span>
                      <span>Hot Promotions</span>
                      <span>Books & Office</span>
                      <span>Sport & Outdoor</span>
                     
                      <span>Babies & Moms</span>
                      <span>Phones</span>
                      <span>Toys</span>
                      <span>Watch</span>
                      <span>Jewelry</span>
                      <span>Health & Beauty</span>
                      <span>Home & Kitchen</span>
                      <span>Computers</span>
                      <span>Clothing</span>
                              <span>Electronics</span>
                               </div>
                   </div>   
                  </div>
                  <div className="avgReviews">
                      <h3>By Reviews</h3>
                      <div className="reviews">
                      <span>X X X X X X & Up</span>
                      <span>X X X X X & Up</span>
                      <span>X X X X & Up</span>
                      <span>X X X & Up</span>
                       </div>
                      
                  </div>
                  <div className="featuredBrands">
                      <h3>By Brand</h3>
                      <div className="brandsList">
                      <span><Checkbox className="checkbox"/>Brand 1</span>
                      <span><Checkbox className="checkbox"/>Brand 2</span>
                      <span><Checkbox className="checkbox"/>Brand 3</span>
                      <span><Checkbox className="checkbox"/>Brand 4</span>
                      <span><Checkbox className="checkbox"/>Brand 5</span>
                      </div>
                      
                  </div>
                  <div className="price">
                      <h3>By Price</h3>
                  </div>
                  <div className="colorsList">
                      <h3>By Color</h3>


                     <div className="colors">
                          <span className="color-item" style={{ backgroundColor: "red" }}></span>
                          <span className="color-item" style={{ backgroundColor: "black" }}></span>
                          <span className="color-item" style={{ backgroundColor: "blue" }}></span>
                           <span className="color-item" style={{backgroundColor: "orange"}}></span>
                          <span className="color-item" style={{ backgroundColor: "yellow" }}></span>
                          <span className="color-item" style={{ backgroundColor: "indigo" }}></span>
                          
                          
                          <span className="color-item" style={{ backgroundColor: "violet" }}></span>
                          
                          <span className="color-item" style={{ backgroundColor: "pink" }}></span>
                          
                          <span className="color-item" style={{ backgroundColor: "brown" }}></span>
                           <span className="color-item" style={{backgroundColor: "green"}}></span>
 
  
                    </div>

                  </div>
                  <div className="sizesList">
                      <h3>By Size</h3>
                      <div className="sizes">
                          <span>S</span>
                          <span>L</span>
                          <span>M</span>
                          <span>X</span>
                          <span>XL</span>
                          <span>XXL</span>
                   </div>
                  </div>

          </div>
              <div className="right">
                  <h1>Products</h1>
                  <div className="products_container">
                      <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
                      
                  </div>
              
          </div>
          </div>
          </div>
  )
}

export default Products