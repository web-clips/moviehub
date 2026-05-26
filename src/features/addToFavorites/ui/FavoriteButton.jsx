import { toggleFavorite, toggleFavoriteLocal } from "@/entities/movie/model/movieSlice";
import { useDispatch } from "react-redux"



export const FavoriteButton = ({ movie }) => {
    const dispatch = useDispatch();

    const handleFavorite = () => {
        dispatch(toggleFavoriteLocal(movie.id))
        dispatch(toggleFavorite(movie))
    }


    return (
        <button onClick={handleFavorite} className="movie__card__to__favorites">
            {movie.isFavorite ? 'Убрать из избранного' : 'В избранное'}
        </button>
    )
}