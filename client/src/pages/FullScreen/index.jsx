import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/loading';
import axios from 'axios';

const FullScreenPage = () => {

    // router 
    const { id } = useParams();
    const navigate = useNavigate();

    // api key
    const authKey = process.env.REACT_APP_API_KEY;

    //states
    const [imgData, setImgData] = useState(null);


    // fetch image on imageID fn 
    const fetchFullScreenImage = async () => {
        const res = await axios.get(
            `https://api.pexels.com/v1/photos/${id}`,
            {
                timeout: 5000,
                headers: {
                    'Authorization': authKey
                }
            }
        )
        setImgData(res.data);
    }

    // back btn fn
    const handleBackBtn = () => {
        navigate('/Sketch-wall');
    }

    //effects
    // fetch image on initial load || change in state
    useEffect(() => {
        fetchFullScreenImage();
    }, []);

    return (
        <div>
            {
                !imgData ?
                    (
                        <Loading />
                    ) :
                    (
                        <div style={{flexDirection:'column',display:'flex', alignItems:'center'}}>
                            <div style={{
                                paddingVertical:'10px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '99%',
                            }}>
                                <button
                                    onClick={handleBackBtn}
                                    style={{
                                        padding: 10,
                                        borderRadius: 10,
                                        backgroundColor: '#fff',
                                        marginLeft: '5px'
                                    }}
                                >
                                    Back
                                </button>
                                <a
                                    href={imgData?.src.original}
                                    download
                                    style={{
                                        padding: 10,
                                        borderRadius: 10,
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        marginLeft: '5px',
                                        textDecoration: 'none',
                                        border: '2px solid'
                                    }}
                                >
                                    Download
                                </a>
                            </div>

                            <br />
                            <div
                                style={{
                                    backgroundImage: `url('${imgData.src.large2x}')`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    width: '99%',
                                    height: '100vh',

                                }}>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default FullScreenPage;