import { createSlice } from "@reduxjs/toolkit";
const CheckOutSlice = createSlice({
    name: "checkout",
    initialState: {
        sessionId: null,
        checkoutLoading: false,
        checkoutError:null
    },
    reducers: {
        checkOutStart: (state)=>{
            state.checkoutLoading =true;
            state.checkoutError=null;
                
        },
        checkOutSuccess: (state,action)=>{
            state.sessionId= action.payload;
            state.checkoutLoading=false;
            state.checkoutError=null;    
        },
        checkOutFail: (state,action)=>{
            state.checkoutLoading=false;
            state.checkoutError=action.payload;  
        },
        resetCheckOut: (state)=>{
            state.sessionId=null;
            state.checkoutLoading =false;
            state.checkoutError=null;
        }

    }
}
    
)
export const { checkOutFail, checkOutStart, checkOutSuccess } = CheckOutSlice.actions;
export default CheckOutSlice.reducer;