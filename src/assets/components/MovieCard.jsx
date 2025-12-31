import React from 'react'

const MovieCard = ({ movie:
    { title, vote_average, poster_path, release_date, original_language }
}) => {
    return (
        <div className="mt-6 grid grid-cols bg-gray-950 p-6  rounded-2xl">
            <img className="rounded-2xl" src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt={title} />
            <div className="mt-4 text-white">
                <h3>{title}</h3>

                <div className="">
                    <div className="">
                        <p>{release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieCard
