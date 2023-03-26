import React from 'react';
import {useAppSelector} from '../../../../store/types';
import {getWeatherSelector} from '../../../../store/modules';
import {Container} from './styled';
import {Details} from '../../../../components';
import {Header, Decoration, DegreeView} from './components';
import {useNewWeatherIcon} from '../../../../hooks';

const WeatherGroup = () => {
  const {data, theme} = useAppSelector(getWeatherSelector);
  const code = data.current.condition.code;
  const isDay = data.current.is_day;
  // const {bigWeatherIcon} = useWeatherIcon({
  //   code,
  //   isDay,
  // });
  const {bigWeatherIcon} = useNewWeatherIcon({code, isDay});

  return (
    <Container bgColor={theme}>
      <Header />
      <Decoration />
      <DegreeView weatherIcon={bigWeatherIcon} />
      <Details />
    </Container>
  );
};

export default WeatherGroup;
