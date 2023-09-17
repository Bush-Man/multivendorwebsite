import { createSlice } from "@reduxjs/toolkit";
 const cartData = JSON.parse(localStorage.getItem("cart")) || {};
const { cartproducts = [], cartquantity = 0, total = 0 } = cartData;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartproducts: cartproducts,
    cartquantity : cartquantity,//total cart quantity
    total: total,
  },
    reducers: {
      addItemToCart: (state, action) => {
        const { product, quantity } = action.payload;
        const existingProductIndex = state.cartproducts.findIndex(
        (item) =>item && (item._id === product._id)
        );
        
      if (existingProductIndex !== -1) {
         state.cartproducts[existingProductIndex].quantity += quantity; //Item quantity in cart       
      } else {
          state.cartproducts.push({ ...product, quantity });
      }
            state.cartquantity += quantity;
            
        state.total += product.discountPrice * quantity;
        
            
        },
      
    /*  removeItemFromCart: (state, action) => {
          const { productId, quantity } = action.payload;
          const existingProductIndex = state.cartproducts.findIndex(
        (item) => item.id === productId
      );

            state.cartquantity -= 1;
            state.cartproducts = state.cartproducts.filter(
             (product) => product.id !== action.payload.id
        );
         if (existingProductIndex !== -1) {
        const existingProduct = state.cartproducts[existingProductIndex];
        if (existingProduct.quantity <= quantity) {
          state.cartproducts.splice(existingProductIndex, 1);
        } else {
          existingProduct.quantity -= quantity;
        }

        state.cartquantity -= quantity;
        state.total -= existingProduct.price * quantity;
      }
    },*/
      },
      resetPersistedCartState: (state) => {
      state.cartproducts = [];
      state.cartquantity = 0;
      state.total = 0;
    },
      
    
    
},
);

export const { addItemToCart,removeItemFromProduct,resetPersistedCartState } = cartSlice.actions;
export default cartSlice.reducer;