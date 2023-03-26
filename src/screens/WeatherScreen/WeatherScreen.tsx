import React, {useEffect} from 'react';
import {ScreenWrapper} from '../../styled';
import {WeatherGroup, HoursList} from './components';
import {useAppDispatch, useAppSelector} from '../../store/types';
import {weatherActions} from '../../store/modules/weather/reducer';
import {TWeatherScreenProps} from './types';
import {getWeatherSelector} from '../../store/modules';
import {View, Text} from 'react-native';
const WeatherScreen = ({setPage}: TWeatherScreenProps) => {
  const dispatch = useAppDispatch();
  const {error} = useAppSelector(getWeatherSelector);
  useEffect(() => {
    dispatch(weatherActions.getCurrentWeather('Sumy'));
  }, [dispatch]);
  return (
    <ScreenWrapper>
      <WeatherGroup />
      {error.isError ? (
        <View>
          <Text>Error</Text>
        </View>
      ) : null}
      <HoursList />
    </ScreenWrapper>
  );
};
export default WeatherScreen;
