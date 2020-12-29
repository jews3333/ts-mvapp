import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type MovieAction = ActionType<typeof actions>;

export type MovieState = Array<any> | null;

// export type MovieItem = {
//     audiAcc: string,
//     movieCd: string,
//     movieNm: string,
//     openDt: string,
//     rank: string,
//     rnum: string
// }