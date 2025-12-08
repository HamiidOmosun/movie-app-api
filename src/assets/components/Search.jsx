import React, {useState} from 'react'
import searchicon from "../images/searchicon.svg";


const Search = ({searchTerm, setSearchTerm}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-row items-center">
            {isOpen && (
                <input
                    type="text"
                    placeholder="Search..."
                    className="placeholder-gray-300 border-b border-b-yellow-400 pr-20 text-white focus:outline-none"
                    value={searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                />
            )}

            <img className="h-6 cursor-pointer" src={searchicon} onClick={()=>{setIsOpen(!isOpen)}} alt=""/>
        </div>
    )
}
export default Search
