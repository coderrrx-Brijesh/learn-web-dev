import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/CounterSlice'
export const Store = configureStore({
    reducer: {
        counter: counterReducer //this will store only states of the slise only not any actions and fetched using useSelector
    }
})