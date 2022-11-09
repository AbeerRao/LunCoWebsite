import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className="bg-transparent">
            <header className="top-0 z-30 w-full px-5 py-4 mt-5 bg-transparent">
                <div className="flex items-center justify-between mx-auto w-max">
                    <div className="flex items-center w-full">
                        <ul className="flex items-center text-white space-x-10 font-semibold w-full">
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Our Mission</a></li>
                            <li><a href="/">Our Products</a></li>
                            <li><a href="/">The Journey</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="w-max mt-32 px-5 py-4 mx-auto">
                <Image
                    src="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTUyNjN8MHwxfHNlYXJjaHwyMXx8bW9vbnxlbnwwfDB8fHwxNjU3MTk0ODA1&ixlib=rb-1.2.1&q=80&w=1080"
                    height={512}
                    width={512}
                    className="rounded-xl" />
            </div>
        </div>
    )
}

export default Header
