import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageTile = ({ imgSource, imgId }) => {

    const navigate = useNavigate()
    return (
        <div
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
}

export default ImageTile;