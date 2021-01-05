import React, { useEffect } from 'react';

import SlickSlider from 'react-slick';

import useMovie from '../../hooks/useMovie';

import MovieItem from './MovieItem';

import '../../scss/Movie.scss';

interface MovieData {
    data : Object
}

let status:Boolean = false;

function Movie(){

    const { list, onGetMovie } = useMovie();

    const settings = {
        // centerMode: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    }

    useEffect(() => {
        if(!status){
            status = true;
            onGetMovie();
        }
    });

    return (
        <div className="new-movie-content">
            <h4 className="tit">New Movie</h4>
            <div className="content-inner">
                <SlickSlider className="movie-list" {...settings}>
                {list ? list.map((item:MovieData, index) => {
                    return <MovieItem key={index} data={item}/>
                }) : null}
                </SlickSlider>
            </div>
        </div>
    )
}

export default Movie;