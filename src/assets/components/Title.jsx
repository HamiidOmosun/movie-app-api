import React from 'react'

const Title = ({ text }) => {
    return (
        <>
        {/* this file displays the title of each section
            when ypu call  the function and pass them through a parameter.
            it displays the title in the style given
        */}

            <h1 className="text-3xl font-bold text-yellow-300">{ text }</h1>
        </>
    )
}
export default Title
