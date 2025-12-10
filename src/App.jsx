import axios from "axios";
import {Route, Routes} from "react-router";
import React, {useEffect, useState} from "react";
import HomePage from "./assets/Pages/HomePage.jsx";
import NavBar from "./assets/components/NavBar.jsx";

const API_BASE_URL = 'https://api.themoviedb.org/3/';

const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`
    }
}

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const fetchMovies = async () => {
        try{

        }catch (error){
            console.error(`Error fetching movies: ${error}`);
        }
    }

    useEffect(() => {

    }, [])
    //states are

    return (
        <>
            <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path="/" element={ <HomePage /> }/>
            </Routes>
        </>
    )
}

export default App
