import React from 'react'
import Spinner from "./Spinner.jsx";
import Title from "./Title.jsx";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({movies, error, setError, loading, setLoading, trend, setTrend}) => {
    return (
        <div className="bg-black text-white px-5 md:px-24 pt-12 ">

            {trend.length > 0 && (
                <section className="mb-12">
                    <Title text="Trending Movies" />

                    <ul className="flex flex-row gap-10 mt-10 overflow-x-auto no-scrollbar">
                        {trend.map((movie) => (
                            <li key={movie.$id} className="flex-shrink-0">
                                <img
                                    src={movie.poster_url}
                                    alt={movie.title}
                                    className="w-40 sm:w-48 md:w-56 rounded-lg"
                                />
                            </li>
                        ))}
                    </ul>

                </section>
            )}

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
