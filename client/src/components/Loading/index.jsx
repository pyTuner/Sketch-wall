import React from 'react'
import loadGIF from '../../assets/Images/loadingAnim.gif'; 

const Loading = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: '1px solid',
        }}>
            <img src={loadGIF} alt='Loading...' width={250} height={250} />
        </div>
    )
}

export default Loading