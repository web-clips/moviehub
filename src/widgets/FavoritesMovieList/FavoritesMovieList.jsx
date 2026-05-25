import { MovieCard } from "@/entities/movie/ui/MovieCard"
import './FavoritesMovieList.css'
import { useSelector } from "react-redux"
import { selectFavorites } from "@/entities/movie/model/selectors"




export const FavoritesMovieList = () => {
    const movies = useSelector(selectFavorites)
    return (
        <div className="favorites">
            <div className="container">
                <div className="favorites__movie__list">
                    {movies
                        .map((movie) => (
                            <MovieCard key={movie.id} {...movie} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}