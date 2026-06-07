import { clearCurrentMovie, fetchMovieDetails } from "@/entities/movie/model/movieSlice";
import { Header } from "@/widgets/Header"
import { MovieDetails } from "@/widgets/MovieDetails/MovieDetails"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"



export const MovieDetailsPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(clearCurrentMovie())
        dispatch(fetchMovieDetails(id))

        return () => {
            dispatch(clearCurrentMovie())
        }
    }, [dispatch, id])
    return (
        <div className="movie__details__page">
            <Header />
            <MovieDetails />
        </div>
    )
}