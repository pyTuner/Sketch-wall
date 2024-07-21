import React, { useState } from 'react';

const SearchBar = ({ fetchData }) => {
    //states
    const [searchText, setSearchText] = useState('');

    // change handler for search text
    const handleChange = (event) => {
        setSearchText(event.target.value);
    }

    // handle submit the search text
    const handleSubmit = (query) => {
        if (query) {
            fetchData(query);
            setSearchText('');
        }

    }

    // handle press Enter to search the query
    const _handlePressEnter = (event) => {
        event.key === 'Enter' &&
            handleSubmit(event.target.value);
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <input
                type='text'
                placeholder='search...'
                value={searchText}
                onKeyDown={_handlePressEnter}
                onChange={handleChange}
                style={{
                    fontSize: '15pt',
                    padding: 7,
                    borderRadius: 10
                }}
            />
            <button
                onClick={
                    () => handleSubmit(searchText)
                }
                style={{
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: '#000',
                    color: '#fff',
                    marginLeft: '5px'
                }}
            >
                Find
            </button>
        </div>
    )
}

export default SearchBar;