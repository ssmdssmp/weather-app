import {AxiosResponse} from 'axios';
import {HttpService} from '../../../services';
import {CURRENT_WEATHER_URL} from './config';
import {TWeatherApiRequestPayload, TWeatherApiResponse} from './types';

export class ApiWeatherService extends HttpService {
  static getWeather({
    locationQuery,
  }: TWeatherApiRequestPayload): Promise<AxiosResponse<TWeatherApiResponse>> {
    const response = this.request({
      url: CURRENT_WEATHER_URL.getWeather(locationQuery),
      method: 'GET',
    });

    return response;
  }
}
