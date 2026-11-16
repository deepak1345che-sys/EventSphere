import { createAction, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const favouriteSlice = createSlice({
    name : "favourites",
    initialState :{name : "Rahul" , cga : 8.89},     // object,array,boolean
    reducers : {
        toggleFavourites(state , action){
            state.name = action.payload
            console.log(state.name);
        },
        removeFavourites(state){

        },
        clearFavourites(state){

        }
    }
});



export const {clearFavourites , toggleFavourites , removeFavourites} = favouriteSlice.actions // update the state

export default favouriteSlice.reducer // connect with store