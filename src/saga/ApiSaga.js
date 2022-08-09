import {
  all,
  call,
  put,
  race,
  select,
  take,
  takeEvery,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import * as Actions from '../action/api';
import * as Types from '../action/types';
import * as Api from '../api';
import { apiRequestData } from "../selectors"

export function* watchers() {
  yield all([
    yield takeLatest(Types.Api.AUTHENTICATE, authenticate),
    

  ]);
}

function* authenticate(action) {
  try {
    let response = yield call(Api.authenticate, action.data);
    
    yield put(Actions.authenticateSucceeded(response));
    action.redirect.navigate('Otp', { data: action.data });
  } catch (error) {
    console.warn(error, 'login error');
    action.redirect.navigate('PreLogin')
    yield put(Actions.authenticateFailed(error));
  }
}
