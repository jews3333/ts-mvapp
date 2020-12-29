import React, { useEffect } from 'react';
import useMovie from '../hooks/useMovie';

import MovieItem from './MovieItem';

import '../scss/Movie.scss';

interface MovieData {
    data : Object
}

function Movie(){

    const { list, onGetMovie } = useMovie();

    useEffect(() => {
        console.log(list)
        if(!list){
            onGetMovie();
        }
    });

    return (
        <div className='content'>
            <ul className="movie-list">
            {list ? list.map((item:MovieData, index) => {
                return <MovieItem key={index} data={item}/>
            }) : null}
            </ul>
        </div>    
    )
}

export default Movie;