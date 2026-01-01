import React from 'react'
import star from '../images/star.svg'

const MovieCard = ({ movie:
    { title, vote_average, poster_path, release_date, original_language }
}) => {
    return (
        <div className="mt-6 grid grid-cols bg-gray -950 p-6  rounded-2xl">
            <img className="rounded-2xl" src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt={title} />
            <div className="mt-4 text-white">
                <h3 className="mb-3">{title}</h3>

                <div className="flex flex-row gap-3">
                    <div className="flex flex-row gap-2">
                        <img src={star} alt="star" />
                        <p>{vote_average ? vote_average.toFixed(1): 'N/A'}</p>
                    </div>

                    <span>•</span>
                    <p>{original_language}</p>

                    <span>•</span>
                    <p>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                </div>
            </div>
        </div>
    )
}
export default MovieCard
