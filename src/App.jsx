import {Route, Routes} from "react-router";
import React, {use, useEffect, useState} from "react";
import HomePage from "./assets/Pages/HomePage.jsx";
import NavBar from "./assets/components/NavBar.jsx";
import MovieList from "./assets/components/MovieList.jsx";
import { useDebounce } from "react-use";
import {getTrendingMovies, updateSearchCount} from "./appwrite.js";

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

    const [trendingMovies, setTrendingMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');



    useDebounce(() => setDebouncedSearchTerm(searchTerm), 500,
        [searchTerm]);

    const fetchMovies = async (query = '') => {
        setIsLoading(true);
        setErrorMessage("");
        try {
            const endpoint = query
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
                : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

            const res = await fetch(endpoint, API_OPTIONS);

            if(!res.ok){
                throw new Error('failed to fetch movies');
            }

            const data = await res.json();

            if(data.result === 'false') {
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([]);
                return;
            }

            setMovieList(data.results || []);

            if(query && data.results.length > 0) {
                await updateSearchCount(query, data.results[0]);
            }

        } catch (error){
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage( 'Error fetching movies.Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }

    const loadTrendingMovies = async () => {
        try{
            const movies = await getTrendingMovies();

            setTrendingMovies(movies);
        } catch (error) {
            console.log(`Error fetching trending movies: ${error}`);
        }
    }

    useEffect(() => {
        fetchMovies(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    useEffect( () => {
        loadTrendingMovies()
    }, [])

    return (
        <>
            <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path="/" element={ <HomePage /> }/>
            </Routes>
            <MovieList movies={movieList} error={errorMessage} setError={setErrorMessage} loading={isLoading} setLoading={setIsLoading}  trend={trendingMovies} setTrend={setTrendingMovies} />
        </>
    )
}

export default App
