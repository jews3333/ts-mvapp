import { createAction } from 'typesafe-actions';

export const GET_MOVIE = 'movie/GET_MOVIE';
export const GET_DAILY = 'movie/GET_DAILY';

export const getMovie = createAction(GET_MOVIE)<Array<any> | null>();
export const getDaily = createAction(GET_DAILY)<Array<any> | null>();