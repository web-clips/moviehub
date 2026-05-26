import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies, updateMovieFavorite } from "../movieApi/movieApi"

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
    error: null
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
    }
})

export const {
    setGenreFilter,
    setSearchValue,
    toggleFavoriteLocal
} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;