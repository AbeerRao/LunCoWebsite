import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <div className="flex flex-col flex-1 items-start mt-16 w-full">
            <h1 className="text-white font-bold text-4xl mx-auto">About Us</h1>
            <div className="flex items-center w-full">
                <div className="p-10">
                    <Image
                        src="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTUyNjN8MHwxfHNlYXJjaHwyMXx8bW9vbnxlbnwwfDB8fHwxNjU3MTk0ODA1&ixlib=rb-1.2.1&q=80&w=1080"
                        width={512}
                        height={512}
                        className="mt-10 rounded-xl" />
                </div>
                <div className="mt-24 text-xl bg-gray-100 px-5 py-10 rounded-xl w-1/2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt, vero beatae odio qui rem sit, autem nostrum assumenda inventore perferendis numquam aspernatur quo recusandae voluptate? Pariatur molestias illo modi!</p>
                </div>
            </div>
        </div>
    )
}

export default About
