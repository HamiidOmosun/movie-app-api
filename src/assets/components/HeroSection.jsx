import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section className="h-screen px-6 flex flex-col justify-center gap-6">
                <h1 className="text-white text-4xl font-bold">Formular 1</h1>
                <p className="text-white max-w-[60ch]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorum eos eveniet iste, modi placeat rem </p>
                <div className="flex flex-row gap-2">
                    <button className="px-6 py-2 bg-yellow-400 rounded-2xl cursor-pointer">Sign Up</button>
                    <button className="px-6 py-2 bg-black text-yellow-300 rounded-2xl cursor-pointer">Watch Now</button>
                </div>
            </section>

        </>
    )
}
export default HeroSection