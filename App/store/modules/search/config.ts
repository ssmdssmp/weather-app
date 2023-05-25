import {Env} from '../../../config';

export const SEARCH_URL = {
  searchList: (searchQuery: string) =>
    `http://api.weatherapi.com/v1/search.json?key=${Env.WEATHER_API_KEY}&q=${searchQuery}`,
};
