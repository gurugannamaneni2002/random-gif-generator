import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import useGif from '../hooks/useGif';

const Random = () => {
    const {loading,gif,fetchData} = useGif();
    return (
        <div className='w-5/6 md:w-1/2 border rounded-sm flex flex-col bg-green-500 items-center gap-6'>
            <h1 className='text-lg underline'>Random Gif</h1>
            {loading ? <Loading /> : <img src={gif} alt="Random Gif" />}
            <button className='bg-yellow-500 w-5/6 py-2 items-stretch rounded-md mb-3' onClick={fetchData}>Generate</button>
        </div>
    );
};

export default Random;
