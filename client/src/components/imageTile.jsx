import React from 'react';

const ImageTile = ({imgSource, imgId}) => {
    return (
        <div style={{
            backgroundImage: `url("${imgSource}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '330px',
            height: '230px',
            margin: '10px',
            boxShadow:'1px 1px 15px #ddd',
        }}>

        </div>
    )
}

export default ImageTile;