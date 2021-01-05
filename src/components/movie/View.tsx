import React, { useEffect } from 'react';

import SlickSlider from 'react-slick';

import useView from '../../hooks/useView';

import '../../scss/View.scss';

interface plotItems {
    plotText: string;
}

function View(props:any){

    const id = props.match.params.id;
    const seq = props.match.params.seq;
    const docid = id+seq;
    const { view, onGetView } = useView();

    useEffect(() => {
        
        if(view){
           if(view[0].DOCID === docid){
               return;
           }
        }

        onGetView(id,seq);
    });

    const settings = {
        centerMode: true,
        variableWidth: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true
    }

    return (
        <div className="movie-view">
            <div className="content-inner">
            {view ?
                <>
                    <div className="movie-info">
                        <div className="thumb">
                            {view[0].posters ? <img src={view[0].posters.split("|")[0]} alt=""/> : <span>No Poster</span>}
                        </div>
                        <div className="info">
                            <h4 className="info-tit">
                                {view[0].title}
                                <p className="info-tit-eng">{view[0].titleEng}</p>
                            </h4>
                            <ul className="info-option">
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
                        <h4 className="movie-tit">스틸컷</h4>
                        {view[0].stlls ? 
                        <SlickSlider {...settings}>
                            {view[0].stlls.split("|").map((stll:string, index:number) => {
                                return (
                                    <div className="still" key={index}>
                                        <img src={stll} alt="" />
                                    </div>
                                )
                            })}
                            
                        </SlickSlider>
                        : <div>스틸컷이 없습니다.</div>}
                    </div>
                    <div className="movie-plots">
                    <h4 className="movie-tit">줄거리</h4>
                        {view[0].plots.plot ?
                            view[0].plots.plot.map((plot:plotItems, index:number) => {
                                return <p key={index}>{plot.plotText}</p>
                            })
                        : <p>줄거리 내용이 없습니다.</p>}
                    </div>
                </>
            : null}
            </div>
        </div>
    )
}

export default View;