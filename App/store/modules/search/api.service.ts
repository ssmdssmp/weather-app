import {AxiosResponse} from 'axios';
import {HttpService} from '../../../services';
import {SEARCH_URL} from './config';
import {TSearchApiResponse, TSearchApiRequestPayload} from './types';

export class ApiSearchService extends HttpService {
  static searchQuery({
    searchQuery,
  }: TSearchApiRequestPayload): Promise<AxiosResponse<TSearchApiResponse>> {
    const response = this.request({
      url: SEARCH_URL.searchList(searchQuery),
      method: 'GET',
    });

    return response;
  }
}
