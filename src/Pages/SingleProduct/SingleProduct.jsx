import { useNavigate, useParams } from "react-router";
import { Deals, ProgressBarComponent, Rating } from "../../AllExports";
import image from "../../assets/71KAGyc9TyL._AC_SX425_.jpg";
import CenterComponent from "./CenterComponent/CenterComponent";
import "./SingleProduct.scss";
import { useEffect, useState } from "react";
import { getProductById } from "../../ApiRequests/ProductsRequest";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Redux/Features/CartSlice";
import RatingsCard from "./ReviewsCard/RatingsCard";
    /*  
            <span>{`(${productRating})`}</span>
          </span>
          <span>{`Remaining : ${stock}`}</span>
        */
const SingleProduct = () => {
    const params = useParams();
    const cart = useSelector((state) => state.cart);
    const { id } = params;
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rating, setRating] = useState(3);
  useEffect(() => {
    // Load cart state from localStorage when the component mounts
    const savedCart = JSON.parse(localStorage.getItem("cart")) || { cartProducts: [] };


  if (savedCart) {
      // Dispatch actions to restore the cart state from localStorage
      savedCart?.cartProducts?.forEach((product) => {
        dispatch(addItemToCart({ product, quantity:product.quantity }));
      });
    }
}, [dispatch]);

    useEffect(() => {
    const saveCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
    saveCartToLocalStorage();
  }, [cart]);
    
  
    useEffect(() => {
        const fetchProductById = async () => {
            const res = await getProductById(id);
           res && setProduct(res);
        }
        fetchProductById();
    }, [id]);
    


    const handleClick = ({type}) => {
        if (type === "rem") {
            quantity >1 && setQuantity(quantity - 1);
        } else{
            setQuantity(quantity + 1);
    }
    }


    const handleAddToCart = () => {
       
        if (product && quantity >= 1) {
            dispatch(addItemToCart({ product, quantity }));
        }
        //show error quantity cant be 0
    }
    const handleCheckout = (e) => {
        e.preventDefault();
        navigate("/cart");
    }
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    }
    
  return (
      <div className="singleProductPage">
          <div className="container">
              <div className="left">
                  <div className="imgList">
                      <span><img src={product?.imageUrl} alt="" /></span>
                      <span><img src={product?.imageUrl} alt="" /></span>
                      <span><img src={product?.imageUrl} alt="" /></span>
                      <span><img src={product?.imageUrl} alt="" /></span>
                      <span><img src={product?.imageUrl} alt="" /></span>
      
            </div>
              <img src={product?.imageUrl} alt="" className="displayedImg" />
          </div>
          <div className="center">
              <div className="top">
                  <h1>
                          Projector Screen with Stand, KSAN 120 inch Foldable Projection Screen HD 16:9 Outdoor Movie Projection Screen for Home Theater Camping with Carrying Bag
                          
                  </h1>
                  <div className="brand">
                      <span>Brand:</span>
                      <span>TCL</span>
                  </div>
                  <div className="ratings">
                      <h2>{`Rating: (${rating})`}</h2>
                        <div>
                              <Rating initialRating={rating} onRatingChange={handleRatingChange} />
                      </div>
                      <span>by 89 verified buyers</span>

                      </div>
                      

                </div>
                  <div className="buttons_card">
                      <div className="quantity_buttons">
                          <span onClick={()=>handleClick({type:"rem"})}>-</span>
                          <span>{quantity}</span>
                          <span onClick={()=>handleClick({type:"add"})}>+</span> 
                      </div>
                      <div className="add_to_cart">
                          <span onClick={handleAddToCart}>ADD TO CART</span>
                      </div>
                      <div className="proceed_to_checkout">
                          <span onClick={handleCheckout}>PROCEED TO PAY</span>
                      </div>
                  </div>
          </div>
          <div className="rating_card_component">
                  <RatingsCard />
          </div>
          </div>
          <CenterComponent />
          <Deals />
          <Deals />
    </div>
  )
}

export default SingleProduct