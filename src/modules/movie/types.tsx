import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type MovieAction = ActionType<typeof actions>;

export type MovieState = {
    list : Array<any> | null;
    view : Array<any> | null;
}

// export type MovieItem = {
//     audiAcc: string,
//     movieCd: string,
//     movieNm: string,
//     openDt: string,
//     rank: string,
//     rnum: string
// }