import React from 'react'

const MovieList = ({movies, error, setError, loading, setLoading}) => {
    return (
        <div className="bg-black text-white px-24 pt-12">
            <h1 className="text-2xl">All movies</h1>

            {loading ? (
                <p className="text-white">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : <ul>
                {movies.map((movie) => (
                   <p className="text-white text-xl">{movie.title}</p>
                ))}
            </ul>}
        </div>
    )
}
export default MovieList
