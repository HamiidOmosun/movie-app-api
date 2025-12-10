import React, {useEffect} from 'react'
import Title from './Title'
import axios from "axios";

const TrendMovie = ({ text }) => {
    useEffect(() => {

    })

    async function fetchMovies() {
        try{
            const res = await axios.get('url')

        }catch(err){
            console.log(err.message);
        }
    }
    return (
        <div className="h-screen text-white bg-black">
            <Title text="Movie Trend." />


        </div>
    )
}
export default TrendMovie
