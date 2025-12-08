import {Route, Routes} from "react-router";
import React, {useState} from "react";
import HomePage from "./assets/Pages/HomePage.jsx";
import NavBar from "./assets/components/NavBar.jsx";

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
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
