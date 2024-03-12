import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { logger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import { accountReducer } from "../reducers/accountReducer";

const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
}

export const store = createStore(accountReducer, initialState, applyMiddleware(thunk, logger));

export type AppDispatch = typeof store.dispatch;