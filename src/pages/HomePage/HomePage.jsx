import { GenreFilter } from "@/features/filterByGenre/GenreFilter"
import { SearchMovie } from "@/features/searchMovie/SearchMovie"
import { Header } from "@/widgets/Header"
import { Hero } from "@/widgets/Hero/Hero"
import { MovieList } from "@/widgets/MovieList/MovieList"



export const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <SearchMovie/>
            <GenreFilter/>
            <MovieList/>
        </div>
    )
}

