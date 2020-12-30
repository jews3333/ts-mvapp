import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { getView } from '../modules/movie';

function useView(){
    const view = useSelector((state:RootState) => state.movie.view);
    const dispatch = useDispatch();
    
    const onGetView = useCallback((id, seq) => {

        let view = new Array();

        fetch(`${process.env.REACT_APP_MOVIE_API_URL}&ServiceKey=${process.env.REACT_APP_MOVIE_API_KEY}&movieId=${id}&movieSeq=${seq}&detail=Y`)
        .then(data => data.json())
        .then(json => {
            console.log(json)
            if(json){
                view = json.Data[0].Result;
                dispatch(getView(view));
            }
        })
        .catch(err => console.log(err));


    }, [dispatch]);

    return {
        view,
        onGetView
    }
}

export default useView;