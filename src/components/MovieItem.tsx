import React from 'react';

function MovieItem(props:any){

    const {
        actors,
        company,
        movieSeq,
        movieId,
        plot,
        posters,
        repRlsDate,
        runtime,
        staffs,
        stlls,
        title,
        titleEng,
        type,
        vods
    } = props.data;

    return (
        <div className='movie-item'>
            <a href="">
                <div className="movie-item-thumb">
                    <img src={posters.split("|")[0]} alt=""/>
                </div>
                <div className="movie-item-info">
                    <p><span>{type}</span>{title}</p>
                    <p>{titleEng}</p>
                    <p>{repRlsDate}</p>
                </div>
            </a>
        </div>
    )
}

export default MovieItem;