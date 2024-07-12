import React from 'react'

const Loading = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img src='/assets/loading.gif' alt='Loading...' width={100} height={100} />
        </div>
    )
}

export default Loading