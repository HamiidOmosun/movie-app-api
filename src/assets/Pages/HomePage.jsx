import React from 'react'
import f1 from "../images/f1.jpg";
import NavBar from "../components/NavBar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import TrendMovie from "../components/TrendMovie.jsx";

const HomePage = ({searchTerm, setSearchTerm}) => {
    return (
        <>
            <div className="bg-center bg-cover bg-no-repeat px-16"
                 style={{backgroundImage: `url(${f1})`}}>
                {/*<NavBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />*/}
                <HeroSection />
            </div>
            <TrendMovie />
        </>
    )
}
export default HomePage
