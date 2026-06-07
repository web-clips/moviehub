import { useSelector } from 'react-redux'
import './MovieDetails.css'
import { selectCurrentMovie, selectMovieLoading } from '@/entities/movie/model/selectors'
import { FavoriteButton } from '@/features/addToFavorites/ui/FavoriteButton'
import { useNavigate } from 'react-router-dom'
import loader from '@/assets/circles-loader-svgrepo-com.svg'


export const MovieDetails = () => {
    const currentMovie = useSelector(selectCurrentMovie)
    const isMovieLoading = useSelector(selectMovieLoading)
    const movieError = useSelector(state => state.movie.movieError)
    const navigate = useNavigate()

    if (isMovieLoading) {
        return (
            <div className="movie__details movie__details--loading">
                <div className="container">
                    <div className="movie__details__wrap movie__details__wrap--skeleton">
                        <div className="movie__details__wrap__img poster-skeleton">
                            <img src={loader} alt="loading" className="poster-skeleton__spinner" />
                        </div>
                        <div className="movie__details__wrap__desc">
                            <div className="skeleton skeleton-actions" />
                            <div className="skeleton skeleton-title" />
                            <div className="skeleton skeleton-meta" />
                            <div className="skeleton skeleton-line" />
                            <div className="skeleton skeleton-line" />
                            <div className="skeleton skeleton-line short" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (movieError) {
        return (
            <div className="movie__details movie__details--error">
                <div className="container">
                    <div className="movie__details__error_box">
                        <h2>Ошибка загрузки</h2>
                        <p className="muted">{movieError}</p>
                        <button className="movie__details__back" onClick={() => navigate(-1)}>Назад</button>
                    </div>
                </div>
            </div>
        )
    }

    if (!currentMovie) {
        return (
            <div className="movie__details movie__details--notfound">
                <div className="container">
                    <h2>Фильм не найден</h2>
                    <button className="movie__details__back" onClick={() => navigate(-1)}>Назад</button>
                </div>
            </div>
        )
    }

    const { image, title, genre, year, rating, description, duration, director } = currentMovie
    const ratingText = (typeof rating === 'number') ? rating.toFixed(1) : (rating || '—')
    const descriptionText = description ? description : 'Описание недоступно.'

    return (
        <div className="movie__details">
            <div className="container">
                <div className="movie__details__wrap">
                    <div className="movie__details__wrap__img">
                        <img src={image} alt={title || 'poster'} />
                        <FavoriteButton movie={currentMovie} />
                    </div>
                    <div className="movie__details__wrap__desc">
                        <div className="movie__details__actions">
                            <button className="movie__details__back" onClick={() => navigate(-1)}>Назад</button>

                        </div>

                        <h1 className="movie__details__title">{title}</h1>

                        <div className="movie__details__meta">
                            {genre && <span className="meta__pill">{genre}</span>}
                            {year && <span className="meta__text">{year}</span>}
                            <span className="meta__rating">{ratingText}</span>
                        </div>

                        <p className="movie__details__description">{descriptionText}</p>

                        <div className="movie__details__extra">
                            {duration && <div><strong>Длительность:</strong> {duration}</div>}
                            {director && <div><strong>Режиссёр:</strong> {director}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}