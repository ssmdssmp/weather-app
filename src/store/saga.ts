import {all} from 'redux-saga/effects';
import {listWatcher} from './modules';
import {weatherWatcher} from './modules/weather/saga';

function* rootSaga() {
  yield all([weatherWatcher(), listWatcher()]);
}

export default rootSaga;
