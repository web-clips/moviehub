import { createSelector } from "@reduxjs/toolkit";


export const selectMovies = (state) =>
    state.movie.movies;

export const selectSearchValue = (state) =>
    state.movie.searchValue

export const selectFavorites = createSelector(
    [selectMovies],
    (movies) => movies.filter(
        movie => movie.isFavorite
    ))

export const selectGenreFilter = (state) =>
    state.movie.genreFilter;


export const selectFilteredMovies = createSelector(
    [selectMovies, selectGenreFilter, selectSearchValue],

    (movies, genreFilter, searchValue) => {
        return movies.filter((movie) => {
            const matchesGenre =
                genreFilter === "Все" || movie.genre === genreFilter

            const matchesSearch =
                movie.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())

            return matchesGenre && matchesSearch
        })
    }
)

export const selectLoading = (state) => 
    state.movie.isLoading;


export const selectError = (state) => 
    state.movie.error;

