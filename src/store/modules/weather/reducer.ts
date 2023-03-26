import {createSlice} from '@reduxjs/toolkit';
import {TDataWrapper} from '../../types';
import {TWeatherData, TWeatherState} from './types';
import {initWeatherData} from './config';
import {Colors} from '../../../styled';
const initialState: TWeatherState = {
  data: initWeatherData,
  loading: false,
  error: {
    isError: false,
    errorMessage: '',
  },
  theme: Colors.blue,
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
    setTheme: (state, {payload}: TDataWrapper<string>) => {
      state.theme = payload;
    },
    // setSelectedWeather: (
    //   state,
    //   {payload}: TDataWrapper<TSetSelectedWeatherPayload>,
    // ) => {
    //   state.selectedWeather = payload;
    // },
  },
});

export const weatherActions = slice.actions;

export default slice.reducer;
