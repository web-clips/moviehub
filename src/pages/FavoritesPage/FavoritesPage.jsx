import { selectFavorites } from "@/entities/movie/model/selectors"
import { FavoritesEmpty } from "@/widgets/FavoritesEmpty/FavoritesEmpty"
import { FavoritesMovieList } from "@/widgets/FavoritesMovieList/FavoritesMovieList"
import { Header } from "@/widgets/Header"
import { Hero } from "@/widgets/Hero/Hero"
import { useSelector } from "react-redux"



export const FavoritesPage = () => {
    const movies = useSelector(selectFavorites)
    return (
        <div className="favorites__page">
            <Header />
            {movies.length > 0
                ? < FavoritesMovieList />
                : <FavoritesEmpty />
            }
        </div>
    )
}

