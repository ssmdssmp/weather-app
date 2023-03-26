import {createSlice} from '@reduxjs/toolkit';
import {TDataWrapper} from '../../types';
import {TSearchListItem, TSearchState} from './types';
const initialState: TSearchState = {
  query: '',
  error: {
    isError: false,
    errorMessage: '',
  },
  loading: false,
  list: [],
};

export const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, {payload}: TDataWrapper<string>) => {
      state.query = payload;
    },
    clearQuery: state => {
      state.query = '';
    },
    getList: (state, {payload}: TDataWrapper<string>) => {
      payload;
      state.error.isError = false;
      state.loading = true;
      state.error.errorMessage = '';
    },
    resetList: state => {
      state.list = [];
    },
    setList: (state, {payload}: TDataWrapper<TSearchListItem[]>) => {
      state.list = payload;
      state.loading = false;
    },
    setListError: (state, {payload}: TDataWrapper<string>) => {
      state.error.isError = true;
      state.error.errorMessage = payload;
    },
  },
});

export const searchActions = slice.actions;

export default slice.reducer;
