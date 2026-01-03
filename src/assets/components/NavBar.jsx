import React from 'react'
import Movflix from '../images/Movflix.svg';
import Search from './Search.jsx';

const NavBar = ({searchTerm, setSearchTerm}) => {

    return (
        <div className="flex justify-between px-5 md:px-20 py-4 z-20 sticky top-0 bg-black ">
            <img className="w-24" src={Movflix} alt=""/>

            <div>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                {/*testing code here*/}
                {/*<h1 className="text-2xl text-white">{searchTerm}</h1>*/}
            </div>
        </div>
    )
}
export default NavBar
