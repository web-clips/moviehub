import favoriteEmpty from '@/assets/favoritesIcon.svg'
import './FavoritesEmpty.css'
import { Link } from 'react-router-dom'

export const FavoritesEmpty = () => {
    return (
        <section className="empty__favorites">
            <div className="container">

                <div className="empty__favorites__content">

                    <div className="empty__favorites__icon">
                        <img src={favoriteEmpty} alt="" />
                    </div>

                    <h2>
                        В избранном пока пусто
                    </h2>

                    <p>
                        Добавляйте любимые фильмы,
                        чтобы быстро находить их позже
                    </p>
                    <Link to="/home">
                        <button>
                            Найти фильмы
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    )
}