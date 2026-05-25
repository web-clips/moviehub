import { movieReducer } from "@/entities/movie/model/movieSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    movie: movieReducer
})