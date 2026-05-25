import { MovieCard } from "@/entities/movie/ui/MovieCard";
import './MovieList.css';
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectFilteredMovies, selectLoading } from "@/entities/movie/model/selectors";
import { useEffect } from "react";
import { fetchMovies } from "@/entities/movie/model/movieSlice";



export const MovieList = () => {
    const dispatch = useDispatch()
    const movies = useSelector(
        selectFilteredMovies
    )
   
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    if (isLoading) {
        return <h2>Загрузка фильмов ...</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div className="movies">
            <div className="container">
                <div className="movies__list">
                    {movies.map((m) => (
                        <MovieCard key={m.id} {...m} />
                    ))}
                </div>
            </div>
        </div>
    )
}