import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { getMovie } from '../modules/movie';

function useMovie(){
    const list = useSelector((state:RootState) => state.movie.list);
    const dispatch = useDispatch();
    
    const onGetMovie = useCallback(() => {

        let list = new Array();

        const date = new Date();
        const year = date.getFullYear().toString();
        const month = () => {
            if(date.getMonth()+1 < 10){
                return "0"+(date.getMonth()+1).toString();
            } else {
                return (date.getMonth()+1).toString();
            }
        }
        const day = () => {
            if(date.getDate() < 10){
                return "0"+date.getDate().toString();
            } else {
                return date.getDate().toString();
            }
        }
        const fullDateFormat = year+month()+day();

        fetch(`${process.env.REACT_APP_MOVIE_API_URL}&ServiceKey=${process.env.REACT_APP_MOVIE_API_KEY}&releaseDte=${fullDateFormat}&listCount=10&detail=Y&sort=repRlsDate,1`)
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