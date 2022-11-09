import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className="mt-5 mx-auto max-w-7xl px-10 h-max flex flex-col flex-1 py-4 space-y-24">
            <div>
                <Image
                    src="https://raw.githubusercontent.com/LunCoSim/lunco-site/main/assets/images/logo_ICO.png"
                    width={64}
                    height={64} />
            </div>
            <div className="flex flex-col space-y-16 flex-1">
                <div className="flex flex-col space-y-5 font-bold text-6xl">
                    <h1>Decentralising</h1>
                    <h1>Lunar</h1>
                    <h1>Access</h1>
                </div>
                <div className="w-lg">
                    <p className="text-2xl">LunCo: An open source lunar base engineering tool</p>
                </div>
                <button
                    className="rounded-xl hover:scale-105 hover:shadow-xl transition transform duration-100 w-xl px-4 py-5 bg-gradient-to-r from-[#EF8E88] to-[#EAE8AF] font-bold text-lg">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Banner
