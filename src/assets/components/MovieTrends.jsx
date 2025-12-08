import React, {useEffect} from 'react';

const MovieTrends = () => {
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
        <div>MovieTrends</div>
    )
}
export default MovieTrends
