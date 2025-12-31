import axios from "axios";
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

    const fetchMovies = async () => {
        try{ const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

            const res = await fetch(endpoint, API_OPTIONS);

            if(!res.ok){
                throw new Error('failed to fetch movies');
            }

            const data = await res.json();

            setMovieList(data.results);

        }catch (error){
            console.error(`Error fetching movies: ${error}`);
            // setErrorMessage( value: 'Error fetching movies.Please try again later.]);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [])
    //states are

    return (
        <>
            <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path="/" element={ <HomePage /> }/>
            </Routes>
            <MovieList movies={movieList} error={errorMessage} setError={setErrorMessage} />
        </>
    )
}

export default App
