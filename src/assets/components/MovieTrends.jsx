import axios from "axios";
import React, {useEffect} from 'react';
import Title from "./Title";

const MovieTrends = ({ text }) => {
    async function MovieTrends() {
        try{
            const res = await axios.get ("url")

        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(() => {

    })
    return (
        <Title text="Movie trends" />
    )
}
export default MovieTrends
