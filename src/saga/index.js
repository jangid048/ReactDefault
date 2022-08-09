import { all } from 'redux-saga/effects';
import * as ApiSaga from './ApiSaga';


export default function* rootSaga() {
    yield all([ApiSaga.watchers()])
}