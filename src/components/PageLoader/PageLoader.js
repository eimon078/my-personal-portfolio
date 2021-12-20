import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import './PageLoader.css'

const PageLoader = (loading) => {
    return (
        <div className='page-loader'>
            <HashLoader color={'#F39C12'} loading={loading} size={50} />
        </div>
    );
};

export default PageLoader;