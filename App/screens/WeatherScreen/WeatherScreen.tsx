import React from 'react';
import {ScreenWrapper} from '../../styled';
import {WeatherGroup, HoursList} from './components';
import {getWeatherSelector, useAppSelector} from '../../store';
import {useThemeColor} from '../../hooks';
import {TComponentWithSetPageProp} from '../../types';
const WeatherScreen = ({setPage}: TComponentWithSetPageProp) => {
  const {theme} = useAppSelector(getWeatherSelector);

  const {screenColor} = useThemeColor(theme);
  return (
    <ScreenWrapper bgColor={screenColor}>
      <WeatherGroup setPage={setPage} />
      <HoursList />
    </ScreenWrapper>
  );
};
export default WeatherScreen;
