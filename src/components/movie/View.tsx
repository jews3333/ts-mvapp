import React, { useEffect } from 'react';

import SlickSlider from 'react-slick';

import useView from '../../hooks/useView';

let status:Boolean = false;

function View(props:any){

    const id = props.match.params.id.substring(0,1);
    const seq = props.match.params.id.substring(1);
    const { view, onGetView } = useView();

    useEffect(() => {
        if(!status){
            status = true;
            onGetView(id, seq);
        }
    });

    const settings = {
        centerMode: false,
        arrows: false,
        slidesToShow: 6,
        infinite: false
    }

    return (
        <div id="content">
            {view ? 
            <div className="movie-view">
                <div className="movie-info">
                    <div className="thumb">
                        <img src={view[0].posters.split("|")[0]} alt=""/>
                    </div>
                    <div className="info">
                        <h4 className="tit">
                            {view[0].title}
                            <p className="eng">{view[0].titleEng}</p>
                        </h4>
                        <ul className="option">
                            <li><strong>카테고리</strong>{view[0].type}</li>
                            <li><strong>장르</strong>{view[0].genre}</li>
                            <li><strong>국가</strong>{view[0].nation}</li>
                            <li><strong>개봉일</strong>{view[0].repRlsDate}</li>
                            <li><strong>상영시간</strong>{view[0].runtime}분</li>
                            <li><strong>제작사</strong>{view[0].company}</li>
                            <li><strong>감독</strong>{view[0].directors.director.map((dir:any,index:number) => <span key={index}>{dir.directorNm}{index !== view[0].directors.director.length-1 ? ", " : null}</span>)}</li>
                            <li><strong>출연</strong>{view[0].actors.actor.map((act:any,index:number) => <span key={index}>{act.actorNm}{index !== view[0].actors.actor.length-1 ? ", " : null}</span>)}분</li>
                        </ul>
                    </div>
                </div>
                <div className="movie-stills">
                    <h4 className="tit">스틸컷</h4>
                    <SlickSlider {...settings}>
                        {view[0].stlls.split("|").map((stll:string, index:number) => {
                            return (
                                <div className="still" key={index}>
                                    <img src={stll} alt="" />
                                </div>
                            )
                        })}
                        
                    </SlickSlider>
                </div>
            </div>
            : null}
        </div>
    )
}

export default View;