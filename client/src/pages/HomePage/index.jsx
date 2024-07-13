import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import axios from 'axios';
import Loading from '../../components/loading';
import ImageTile from '../../components/imageTile';

// default component 
const Homepage = () => {
    // states
    const [data, setData] = useState(null);

    // api key
    const authKey = process.env.REACT_APP_API_KEY;

    // fetch api functions
    const fetchData = async (keyword) => {
        try {
            const res = await axios.get(
                `https://api.pexels.com/v1/search?query=${keyword}`,
                {
                    // timeout: 1000,
                    headers: {
                        'Authorization': authKey
                    }
                }
            )
            // console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    // effects
    useEffect(() => {
        fetchData('creative');
    }, [])


    return (
        <div>
            <Navbar fetchData={fetchData} />
            {
                data === null ? <Loading /> :
                    (
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}>
                            {
                                data?.photos.map(imgEle => {
                                    return <ImageTile
                                        imgSource={imgEle.src.medium}
                                        key={imgEle.id}
                                        imgId={imgEle.id}
                                    />
                                })
                            }
                        </div>
                    )

            }

        </div>
    );
}

export default Homepage;