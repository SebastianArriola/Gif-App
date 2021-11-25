import React from 'react'

const GifGridItem = (img) => {
    return (
        <div className="card animate__animated animate__lightSpeedInLeft">
            <p>{img.img.title}</p>
            <img src={img.img.url} alt={img.img.title}></img>
        </div>
    )
}

export default GifGridItem
