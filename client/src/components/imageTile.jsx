import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageTile = forwardRef(({ imgSource, imgId }, ref) => {

    const navigate = useNavigate()
    return (
        <div
            ref={ref}
            key={imgId}
            style={{
                backgroundImage: `url("${imgSource}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '330px',
                height: '230px',
                margin: '10px',
                boxShadow: '1px 1px 15px #ddd',
            }}
            onClick={() => navigate(`/FullScreen/${imgId}`)}
        >
        </div>
    )
})

export default ImageTile;