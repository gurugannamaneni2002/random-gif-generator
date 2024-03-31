import React, { useEffect, useState } from 'react';

import Loading from './Loading';
import useGif from '../hooks/useGif';
const Tag = () => {
    
    const [tag,setTag]=useState("cute cats");
    const {loading,gif,fetchData} = useGif(tag);
     function changeHandler(event){
        setTag(event.target.value);
     }
     function submitHandler(event){
        event.preventDefault();
        fetchData();
     }

    return (
        <div className='w-5/6 md:w-1/2 border rounded-sm flex flex-col bg-green-500 items-center gap-6'>
            <h1 className='text-lg underline'>Random Gif</h1>
            {loading ? <Loading /> :  <img src={gif} alt="Random Gif" />}
            <form onSubmit={submitHandler}>
            <input type='text' onChange={changeHandler} value={tag} className='md:w-5/6 w-2/3 text-center rounded-md border border-gray-300 px-3 py-2 focus:z-10 text-sm lg:text-lg'></input>
            <button className='bg-yellow-500 w-5/6 py-2 items-stretch rounded-md mb-3' >Generate</button>
            </form>
        </div>
    );
};

export default Tag;