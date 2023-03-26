import {combineReducers} from 'redux';
import {searchReduser, weatherReducer} from './modules';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  search: searchReduser,
});
