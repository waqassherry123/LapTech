import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user: null,
    loading:false,
    isLoggedIn: false,
    error:null,
}

const authSlice = createSlice ({
    name : 'auth',
    initialState,
    reducers: {
        login: state => ({
            ...state,
            loading:true,
            isLoggedIn:false,
            error:null
        }),
        loginSuccess: (state, action) => ({
            ...state,
            loading:false,
            isLoggedIn:true,
            user: action.payload
        }),
        loginFailure: (state,action) => ({
            ...state,
            loading:false,
            isLoggedIn:false,
            error: action.payload,

        })
    }
})

export default authSlice;