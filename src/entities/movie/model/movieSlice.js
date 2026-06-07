import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovieDetails, getMovies, updateMovieFavorite } from "../movieApi/movieApi"

export const fetchMovies = createAsyncThunk(
    "movie/fetchMovies",
    async (_, thunkAPI) => {
        try {
            return await getMovies()
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                error.message ||
                "Ошибка загрузки фильмов"
            )
        }
    }
)

export const fetchMovieDetails = createAsyncThunk(
    "movie/fetchMovieDetails",
    async (id, thunkAPI) => {
        try {
            return await getMovieDetails(id)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const toggleFavorite = createAsyncThunk(
    "movie/toggleFavorite",

    async (movie, thunkAPI) => {
        try {
            return await updateMovieFavorite(
                movie.id,
                !movie.isFavorite
            )
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.message || "Ошибка обновления избранного"
            )
        }
    }
)



const initialState = {
    movies: [],
    genreFilter: "Все",
    searchValue: "",
    isLoading: false,
    error: null,
    currentMovie: null,
    isMovieLoading: false,
    movieError: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setGenreFilter: (state, action) => {
            state.genreFilter = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        toggleFavoriteLocal: (state, action) => {
            const movie = state.movies.find(
                movie => movie.id === action.payload
            )
            if (movie) {
                movie.isFavorite = !movie.isFavorite
            }
            if (state.currentMovie && state.currentMovie.id === action.payload) {
                state.currentMovie.isFavorite = !state.currentMovie.isFavorite
            }
        },
        clearCurrentMovie:(state)=>{
            state.currentMovie = null
            state.movieError = null
            state.isMovieLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchMovieDetails.pending, (state) => {
                state.isMovieLoading = true
                state.movieError = null
                state.currentMovie = null
            })
            .addCase(fetchMovieDetails.fulfilled, (state, action) => {
                state.isMovieLoading = false;
                state.currentMovie = action.payload;
            })
            .addCase(fetchMovieDetails.rejected, (state, action) => {
                state.isMovieLoading = false;
                state.movieError = action.payload;
                state.currentMovie = null;
            })
    }
})

export const {
    clearCurrentMovie,
    setGenreFilter,
    setSearchValue,
    toggleFavoriteLocal
} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;