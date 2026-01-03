import React from 'react'
import f1 from "../images/f1.jpg";
import NavBar from "../components/NavBar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import MovieList from "../components/MovieList.jsx";

const HomePage = ({searchTerm, setSearchTerm}) => {
    return (
        <>
            <div className="bg-center bg-cover bg-no-repeat md:px-16"
                 style={{backgroundImage: `url(${f1})`}}>
                {/*<NavBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />*/}
                <HeroSection />
            </div>
        </>
    )
}
export default HomePage
