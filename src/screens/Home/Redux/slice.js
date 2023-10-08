import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    loading: false,
    error: null,
}

const Slice = createSlice({
    name: 'HOME',
    initialState,
    reducers: {
        getProducts: (state, action) => ({
            ...state,
            products: action.payload
        }),
        addToCart: (state, action) => ({
            ...state,
            cart: action.payload
        })
    }
})

export default Slice;