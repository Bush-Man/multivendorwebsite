// src/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'buyer',
  initialState: {
    currentBuyer: null,
    isLoading: false,
    error: null,
    
  },
  reducers: {
    // Action for user login
    loginStart: (state) => {
             
      
      state.isLoading = true;
      state.error = null;
      
      },
      loginSuccess:(state,action) => {
        state.currentBuyer = action.payload;
        state.isLoading = false;
        state.error = null;
      
      },
      loginFail:(state,action) => {
        
        state.isLoading = false;
        state.error = action.payload;
      
    },
    // Action for user logout
     logoutStart:(state) => {
  
       state.isLoading = true;
       state.error = null;
    },
     logoutSuccess:(state) => {
        state.currentBuyer = null;
       state.isLoading = false;
       state.error = null;
    }
     ,
     logoutFail:(state) => {
        
       state.isLoading = false;
       state.error = true;
    },
      
   
  },
});

export const { loginStart,loginSuccess,loginFail,logoutFail,logoutSuccess,logoutStart } = authSlice.actions;
export default authSlice.reducer;
