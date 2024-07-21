import React from 'react';
import logo from '../../assets/Images/logo.png';
import SearchBar from '../../components/SearchBar';


export default function Header() {
    return (
        <header className='header'>
            <div style={{
                padding: ' 0px 32px',
                fontSize: '16pt',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }} >
                <div className='title-container' style={{ display: 'flex', alignItems: 'center' }}>
                    <img className='logo' src={logo} width={'30px'} height={'30px'} style={{ marginRight: 10 }} />
                    <span className='title'>SketchWall</span>
                </div>
                <SearchBar />
            </div>

        </header>
    )
}