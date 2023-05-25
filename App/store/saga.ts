import {all} from 'redux-saga/effects';
import {listWatcher} from './modules';
import {InitialLocationWatcher, weatherWatcher} from './modules/weather/saga';

function* rootSaga() {
  yield all([weatherWatcher(), listWatcher(), InitialLocationWatcher()]);
}

export default rootSaga;
