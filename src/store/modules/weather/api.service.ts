import {AxiosResponse} from 'axios';
import {HttpService} from '../../../services';
import {CURRENT_WEATHER_URL, GET_IP_URL} from './config';
import {
  TIPApiResponse,
  TWeatherApiRequestPayload,
  TWeatherApiResponse,
} from './types';

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
export class ApiIPService extends HttpService {
  static getIP(): Promise<AxiosResponse<TIPApiResponse>> {
    const response = this.request({
      url: GET_IP_URL.getIP(),
      method: 'GET',
    });

    return response;
  }
}
