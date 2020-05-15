import {reducer as sessionReducer, saga as sessionSaga} from './session';
import {saga as authSaga} from './auth';
import authReducer from './auth/reducer';
import {saga as routerSaga} from './router';
import {saga as alertSaga} from './alert';
import {reducer as snackBarReducer} from 'state/ducks/snackBar';
import {reducer as prospectReducer, saga as prospectSage} from 'state/ducks/prospect';
import {reducer as playerReducer, saga as playerSage} from 'state/ducks/player';
import {saga as errorSaga} from 'state/ducks/error';

import {all} from 'redux-saga/effects';
import State from 'state/entities/State';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers<State>({
  session: sessionReducer,
  auth: authReducer,
  snackBar: snackBarReducer,
  players: prospectReducer,
  player: playerReducer,
});

export function* rootSaga() {
  yield all([
    //
    authSaga(),
    routerSaga(),
    sessionSaga(),
    alertSaga(),
    prospectSage(),
    playerSage(),
    errorSaga(),
  ]);
}
