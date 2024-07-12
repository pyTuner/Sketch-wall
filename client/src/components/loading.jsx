import React from 'react'
import loadGIF from '../assets/loadingAnim.gif';

const Loading = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img src={loadGIF} alt='Loading...' width={100} height={100} />
        </div>
    )
}

export default Loading