import { store } from "../configureStore/store";
import { ReduxAction } from "../utils/types";

// @ts-ignore
export const loggerEnhancer = ({ getState }: typeof store) => (next: (action: ReduxAction) => any) => (action: ReduxAction) => {
    console.log(`type: ${action.type}, payload: ${action.payload}`);
    console.log(getState());

    return next(action);
}