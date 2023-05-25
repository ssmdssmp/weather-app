import React from 'react';
import {getWeatherSelector, useAppSelector} from '../../../../store';
import {Container} from './styled';
import {Details} from '../../../../components';
import {Header, Decoration, DegreeView, YourCityTooltip} from './components';
import {useThemeColor, useWeatherIcon} from '../../../../hooks';
import {TComponentWithSetPageProp} from '../../../../types';

const WeatherGroup = ({setPage}: TComponentWithSetPageProp) => {
  const {data, theme, showIsYourCityTooltip} =
    useAppSelector(getWeatherSelector);
  const code = data.current.condition.code;
  const isDay = data.current.is_day;
  const {bigWeatherIcon} = useWeatherIcon({code, isDay});
  const {color} = useThemeColor(theme);

  return (
    <Container bgColor={color}>
      <Header />
      {showIsYourCityTooltip && <YourCityTooltip setPage={setPage} />}
      <Decoration />
      <DegreeView weatherIcon={bigWeatherIcon} />
      <Details />
    </Container>
  );
};

export default WeatherGroup;
