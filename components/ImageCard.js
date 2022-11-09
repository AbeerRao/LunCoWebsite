import React from 'react'
import Image from 'next/image'

function ImageCard({ image, text }) {
    return (
        <div className="w-max mt-32 px-5 py-4 mx-auto">
            <Image
                src={image}
                height={512}
                width={512}
                className="rounded-xl" />
            <h1 className="mt-10">{text}</h1>
        </div>
  )
}

export default ImageCard
