import { createReducer } from "typesafe-actions";
import { GET_MOVIE, GET_DAILY } from "./actions";
import { MovieState, MovieAction } from "./types";

const initialState:MovieState = null;

const getMovieData = createReducer<MovieState, MovieAction>(initialState, {
    [GET_MOVIE]: (state, action) => (
        action.payload
        ),
    [GET_DAILY]: (state, action) => (
        action.payload
    )
});

export default getMovieData;