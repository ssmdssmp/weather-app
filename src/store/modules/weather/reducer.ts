import {createSlice} from '@reduxjs/toolkit';
import {TDataWrapper} from '../../types';
import {TWeatherData, TWeatherState} from './types';
import {initWeatherData} from './config';
const initialState: TWeatherState = {
  data: initWeatherData,
  loading: false,
  error: {
    isError: false,
    errorMessage: '',
  },
  theme: 'light',
};
export const slice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getCurrentWeather: (state, {payload}: TDataWrapper<string>) => {
      payload;
      state.loading = true;
      state.error.isError = false;
      state.error.errorMessage = '';
    },
    setCurrentWeather: (state, {payload}: TDataWrapper<TWeatherData>) => {
      state.data = payload;
      state.loading = false;
    },
    setCurrentWeatherError: (state, {payload}: TDataWrapper<string>) => {
      state.error.isError = true;
      state.error.errorMessage = payload;
    },
    setTheme: (state, {payload}: TDataWrapper<'light' | 'dark'>) => {
      state.theme = payload;
    },
  },
});

export const weatherActions = slice.actions;

export default slice.reducer;
