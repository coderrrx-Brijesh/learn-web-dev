import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    cart:[]
}
export const CartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.cart.push(action.payload); //payload represents the data passed as an argument from call function
        },
        remove:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload.id);
        }
    }
})

export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;