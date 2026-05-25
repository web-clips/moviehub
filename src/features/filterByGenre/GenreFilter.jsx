import './GenreFilter.css'
import { useDispatch, useSelector } from "react-redux";
import { selectGenreFilter } from "@/entities/movie/model/selectors";
import { setGenreFilter } from "@/entities/movie/model/movieSlice";

const genre = [
    { id: 1, name: 'Все' },
    { id: 2, name: 'Экшен' },
    { id: 3, name: 'Комедия' },
    { id: 4, name: 'Драма' },
    { id: 5, name: 'Хоррор' },
    { id: 6, name: 'Фантастика' }
]


export const GenreFilter = () => {
    const dispatch = useDispatch();
    const activeGenre = useSelector(selectGenreFilter)
    return (
        <div className="genre">
            <div className="genre__filter">
                {genre.map((g) => (
                    <button key={g.id} className={`genre__btn ${activeGenre === g.name ? 'active' : ''}`} onClick={()=> dispatch(setGenreFilter(g.name))}>{g.name}</button>
                ))}
            </div>
        </div>
    )
}