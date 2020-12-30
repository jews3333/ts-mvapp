import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { getMovie } from '../modules/movie';

function useMovie(){
    const list = useSelector((state:RootState) => state.movie.list);
    const dispatch = useDispatch();
    
    const onGetMovie = useCallback(() => {

        let list = new Array();

        fetch(`${process.env.REACT_APP_MOVIE_API_URL}&ServiceKey=${process.env.REACT_APP_MOVIE_API_KEY}&listCount=10&releaseDts=20190101&detail=Y`)
        .then(data => data.json())
        .then(json => {
            console.log(json)
            if(json){
                list = json.Data[0].Result;
                dispatch(getMovie(list));
            }
        })
        .catch(err => console.log(err));


    }, [dispatch]);

    return {
        list,
        onGetMovie
    }
}

export default useMovie;