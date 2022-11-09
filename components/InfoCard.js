import React from 'react'
function InfoCard({ title, description, buttonText }) {
    return (
        <div className="items-center mt-32 mx-auto max-w-7xl px-10 flex flex-col flex-1 py-4 space-y-24">
            <div className="flex flex-col space-y-16 flex-1">
                <div className="flex flex-col space-y-5 font-bold text-6xl">
                    <h1>{title}</h1>
                </div>
                <div className="w-lg">
                    <p className="text-xl">{description}</p>
                </div>
                <button
                    className="rounded-xl hover:scale-105 hover:shadow-xl transition transform duration-100 w-xl px-4 py-5 bg-gradient-to-r text-white from-[#c22e70] to-[#3a1246] font-bold text-lg">
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default InfoCard
