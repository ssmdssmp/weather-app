import React from 'react';
import {useAppSelector} from '../../../../store/types';
import {getWeatherSelector} from '../../../../store/modules';
import {Container} from './styled';
import {Details} from '../../../../components';
import {Header, Decoration, DegreeView} from './components';
import {useNewWeatherIcon} from '../../../../hooks';
import {useThemeColor} from '../../../../hooks/useThemeColor';

const WeatherGroup = () => {
  const {data, theme} = useAppSelector(getWeatherSelector);
  const code = data.current.condition.code;
  const isDay = data.current.is_day;
  const {bigWeatherIcon} = useNewWeatherIcon({code, isDay});
  const {color} = useThemeColor(theme);

  return (
    <Container bgColor={color}>
      <Header />
      <Decoration />
      <DegreeView weatherIcon={bigWeatherIcon} />
      <Details />
    </Container>
  );
};

export default WeatherGroup;
