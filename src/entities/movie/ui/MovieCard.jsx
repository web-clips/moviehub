import play from '@/assets/play.svg'
import './MovieCard.css'
import { FavoriteButton } from '@/features/addToFavorites/ui/FavoriteButton';



export const MovieCard = (movie) => {
    return (
        <div className={`movie__card ${movie.isFavorite ? 'favorite' : ''}`}>
            <div className="movie__card__img">
                <img src={movie.image} alt="" />
            </div>
            <div className="movie__card__top">
                <p>{movie.genre}</p>
                <span>{movie.rating}</span>
            </div>
            <div className="movie__card__description">
                <h3>{movie.title}</h3>
                <span>{movie.year}</span>
            </div>
            <div className="movie__card__play">
                <img src={play} alt="" />
            </div>
            <FavoriteButton movie={movie} />
        </div>
    )
}