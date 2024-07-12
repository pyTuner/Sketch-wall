import React, { useState } from 'react';
import logo from '../assets/logo.png';
const Navbar = ({ fetchData }) => {
    //states
    const [searchText, setSearchText] = useState('');

    console.log(searchText);
    // change handler for search text
    const handleChange = (event) => {
        setSearchText(event.target.value)
    }

    // handle submit the search text
    const handleSubmit = (query) => {
        if (query) {
            fetchData(query);
            setSearchText('');
            console.log(searchText);
        }

    }

    // handle press Enter to search the query
    const _handlePressEnter = (event) => {
        event.key === 'Enter' &&
            handleSubmit(event.target.value)
    }

    return (
        <nav style={{
            width: '100%',
            boxShadow: '1px 1px 15px #ddd',
        }}>
            <div style={{
                padding: '10px 30px',
                fontSize: '16pt',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} width={'30px'} height={'30px'} style={{ marginRight: 10 }} />
                    SketchWall
                </span>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type='text' placeholder='search...' value={searchText} onKeyDown={_handlePressEnter} onChange={handleChange} style={{ fontSize: '15pt', padding: 7, borderRadius: 10 }} />
                    <button onClick={() => handleSubmit(searchText)} style={{ padding: 10, borderRadius: 10, backgroundColor: '#fff' }} >Find</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar