import React from 'react'
import Spinner from "./Spinner.jsx";
import Title from "./Title.jsx";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({movies, error, setError, loading, setLoading}) => {
    return (
        <div className="bg-black text-white px-24 pt-12 ">
            <Title text="All Movies" />

            {loading ? (
                <Spinner />
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : <ul className="mt-6 grid gap-4 sm:flex sm:flex-col md:grid md:grid-cols-3 lg:grid-cols-4">
                {movies.map((movie) => (
                   <MovieCard key={movie.id} movie={movie}/>
                ))}
            </ul>}
        </div>
    )
}
export default MovieList
