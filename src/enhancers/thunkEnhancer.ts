// @ts-ignore
export const thunkEnhancer = ({ getState, dispatch }: typeof store) => (next: (action: ReduxAction) => any) => (action: ReduxAction) => {
    if(typeof action === 'function') {
        return action(dispatch, getState);
    }

    return next(action);
}