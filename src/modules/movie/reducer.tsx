import { createReducer } from "typesafe-actions";
import { GET_MOVIE, GET_DAILY, GET_VIEW } from "./actions";
import { MovieState, MovieAction } from "./types";

const initialState:MovieState = {
    list: null,
    view: null
};

const getMovieData = createReducer<MovieState, MovieAction>(initialState, {
    [GET_MOVIE]: (state, action) => {
        return {
            ...state,
            list : action.payload
        }
    },
    [GET_DAILY]: (state, action) => {
        return {
            ...state,
            list : action.payload
        }
    },
    [GET_VIEW]: (state, action) => {
        return {
            ...state,
            view : action.payload
        }
    }
});

export default getMovieData;