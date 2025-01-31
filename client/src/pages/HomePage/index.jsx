import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from '../../components/navbar';
import axios from 'axios';
import Loading from '../../components/loading';
import ImageTile from '../../components/imageTile';

// default component 
const Homepage = () => {
    // states
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const observer = useRef(null);

    const [searchText, setSearchText] = useState('creative');

    // api key
    const authKey = process.env.REACT_APP_API_KEY;

    // fetch api functions
    const fetchData = async (keyword, newPage = 1) => {
        if (loading) return;

        setLoading(true);

        try {
            const res = await axios.get(
                `https://api.pexels.com/v1/search?query=${keyword}&page=${newPage}&per_page=15`,
                {
                    // timeout: 1000,
                    headers: {
                        'Authorization': authKey
                    }
                }
            )
            console.log(res.data);
            setData(prevData => newPage === 1 ? res.data.photos : [...prevData, ...res.data.photos]);

        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    // effects
    useEffect(() => {
        fetchData(searchText, 1);
    }, [])


    // infinite scrolling fn
    const lastImageRef = useCallback((node) => {
        console.log('ref called!');
        if (loading) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(prevPage => prevPage + 1);
            }
        });

        if (node) observer.current.observe(node);

    }, [loading]);

    // fetch more data on bottom of the page
    useEffect(() => {
        if (page > 1) {
            fetchData(searchText, page);
        }
    }, [page])

    return (
        <div>
            <Navbar
                fetchData={(keyword) => { setData([]); setPage(1); fetchData(keyword, 1); }}
                searchText={searchText}
                setSearchText={setSearchText}
            />

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                {
                    data?.map((imgEle, index) => {
                        if (index === data.length - 1) {
                            return (
                                <ImageTile
                                    ref={lastImageRef}
                                    imgSource={imgEle.src.medium}
                                    key={imgEle.id}
                                    imgId={imgEle.id}
                                />
                            )
                        }
                        return (
                            <ImageTile
                                imgSource={imgEle.src.medium}
                                key={imgEle.id}
                                imgId={imgEle.id}
                            />
                        );

                    })}
            </div>
            {loading && <Loading />}
        </div>
    );
}

export default Homepage;