import React, { useEffect } from 'react';

import SlickSlider from 'react-slick';

import useMovie from '../hooks/useMovie';

import MovieItem from './MovieItem';

import '../scss/Movie.scss';

interface MovieData {
    data : Object
}

function Movie(){

    const { list, onGetMovie } = useMovie();

    const settings = {
        centerMode: false,
        arrows: false,
        slidesToShow: 6,
        infinite: false
    }

    useEffect(() => {
        console.log(list)
        if(!list){
            onGetMovie();
        }
    });

    return (
        <div className='content'>
            <SlickSlider className="movie-list" {...settings}>
            {list ? list.map((item:MovieData, index) => {
                return <MovieItem key={index} data={item}/>
            }) : null}
            </SlickSlider>
        </div>    
    )
}

export default Movie;