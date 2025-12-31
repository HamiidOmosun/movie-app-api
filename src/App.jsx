import {Route, Routes} from "react-router";
import React, {useEffect, useState} from "react";
import HomePage from "./assets/Pages/HomePage.jsx";
import NavBar from "./assets/components/NavBar.jsx";
import MovieList from "./assets/components/MovieList.jsx";

//API application programming interface

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`
    }
}

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [movieList, setMovieList] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage("");
        try {
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

            const res = await fetch(endpoint, API_OPTIONS);

            if(!res.ok){
                throw new Error('failed to fetch movies');
            }

            const data = await res.json();

            if(data.res === 'false') {
                setErrorMessage(data.Error || 'Falied to fetch movies');
                setMovieList([]);
                return;
            }

            setMovieList(data.results || []);

        } catch (error){
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage( 'Error fetching movies.Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <>
            <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path="/" element={ <HomePage /> }/>
            </Routes>
            <MovieList movies={movieList} error={errorMessage} setError={setErrorMessage} loading={isLoading} setLoading={setIsLoading} />
        </>
    )
}

export default App
