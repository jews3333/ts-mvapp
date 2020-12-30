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
                <div className="thumb">
                    {posters ? <img src={posters.split("|")[0]} alt=""/> : <span>No Poster</span>}
                </div>
                <div className="info">
                    <p className="tit"><span>{type}</span>{title}</p>
                    <p className="eng">{titleEng}</p>
                    <p className="date">{repRlsDate}</p>
                </div>
            </a>
        </div>
    )
}

export default MovieItem;