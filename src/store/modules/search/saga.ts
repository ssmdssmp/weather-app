import {call, takeEvery, put} from 'redux-saga/effects';
import {TDataWrapper} from '../../types';
import {ApiSearchService} from './api.service';
import {TSearchApiResponse} from './types';
import {searchActions} from './reducer';
function* getListWorker({payload}: TDataWrapper<string>) {
  try {
    const res: TSearchApiResponse = yield call(
      [ApiSearchService, ApiSearchService.searchQuery],
      {
        searchQuery: payload,
      },
    );
    yield put(searchActions.setList(res.data));
  } catch (e) {
    if (typeof e === 'string') {
      yield put(searchActions.setListError(e));
    }
  }
}
export function* listWatcher() {
  yield takeEvery(searchActions.getList, getListWorker);
}
