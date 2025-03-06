// Creating a slice requires a string name to identify the slice, an initial state value, 
// and one or more reducer functions to define how the state can be updated. Once a slice is created, 
// we can export the generated Redux action creators and the reducer function for the whole slice.

import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    value: 0
}

export const counterSlice =createSlice(
    {
        name: 'counterSlice',
        initialState,
        reducers:{
            increment: (state)=>{
                state.value++
            },
            decrement: (state)=>{
                state.value--
            },
            incrementByAmount: (state, action)=>{
                state.value = state.value + action.payload
            },
            decrementByAmount: (state, action)=>{
                state.value = state.value - action.payload
            },
        }
    }
)

export const {increment, decrement, incrementByAmount,decrementByAmount}=counterSlice.actions;

export default counterSlice.reducer