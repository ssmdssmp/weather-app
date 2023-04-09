import {call, takeEvery, put} from 'redux-saga/effects';
import {TDataWrapper} from '../../types';
import {ApiWeatherService} from './api.service';
import {TWeatherApiResponse} from './types';
import {weatherActions} from './reducer';
function* getWeatherWorker({payload}: TDataWrapper<string>) {
  try {
    const res: TWeatherApiResponse = yield call(
      [ApiWeatherService, ApiWeatherService.getWeather],
      {
        locationQuery: payload,
      },
    );
    console.log(res.data);
    yield put(weatherActions.setCurrentWeather(res.data));
  } catch (e) {
    if (typeof e === 'string') {
      yield put(weatherActions.setCurrentWeatherError(e));
    }
  }
}
export function* weatherWatcher() {
  yield takeEvery(weatherActions.getCurrentWeather, getWeatherWorker);
}
