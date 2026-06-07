import { axiosInstance } from "@/shared/api/axiosInstance"

export const getMovies = async () => {
  const response = await axiosInstance.get('/movies');
  return response.data
}
export const updateMovieFavorite = async (id, isFavorite) => {
  const response = await axiosInstance.put(`/movies/${id}`, {
    isFavorite,
  })

  return response.data
}

export const getMovieDetails = async (id) => {
  const response = await axiosInstance.get(`/movies/${id}`)
  return response.data
}