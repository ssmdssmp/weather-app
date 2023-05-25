import {combineReducers} from 'redux';
import {searchReducer, weatherReducer} from './modules';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  search: searchReducer,
});
