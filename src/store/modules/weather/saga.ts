import {call, takeEvery, put} from 'redux-saga/effects';
import {TDataWrapper} from '../../types';
import {ApiIPService, ApiWeatherService} from './api.service';
import {TIPApiResponse, TWeatherApiResponse} from './types';
import {weatherActions} from './reducer';
function* getWeatherWorker({payload}: TDataWrapper<string>) {
  try {
    const res: TWeatherApiResponse = yield call(
      [ApiWeatherService, ApiWeatherService.getWeather],
      {
        locationQuery: payload,
      },
    );
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

function* getInitialLocationWorker() {
  try {
    const publicIPData: TIPApiResponse = yield call([
      ApiIPService,
      ApiIPService.getIP,
    ]);

    yield put(
      weatherActions.getCurrentWeather(
        publicIPData.data.lat + ',' + publicIPData.data.lon,
      ),
    );
    yield put(weatherActions.getInitialLocationSuccess());
  } catch (e) {
    console.log(e);
  }
}
export function* InitialLocationWatcher() {
  yield takeEvery(weatherActions.getInitialLocation, getInitialLocationWorker);
}
