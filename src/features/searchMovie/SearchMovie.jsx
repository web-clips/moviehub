import search from '@/assets/search.svg'
import './SearchMovie.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchValue } from '@/entities/movie/model/selectors'
import { setSearchValue } from '@/entities/movie/model/movieSlice'

export const SearchMovie = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector(selectSearchValue)

    return (
        <div className="search">
            <div className="search__movie">
                <div className="search__movie__icon">
                    <img src={search} alt="" />
                </div>
                <div className="search__movie__holder">
                    <input
                        type="text"
                        className="search__movie__input"
                        placeholder='Найти фильм, актёра или жанр…'
                        value={searchValue}
                        onChange={(e) => dispatch(setSearchValue(e.target.value))} />
                </div>
            </div>
        </div>
    )
}