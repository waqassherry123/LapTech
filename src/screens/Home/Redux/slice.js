import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
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


    }
})

export default Slice;