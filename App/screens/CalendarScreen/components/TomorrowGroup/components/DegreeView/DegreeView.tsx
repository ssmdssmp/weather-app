import React from 'react';
import {SvgXml} from 'react-native-svg';
import {useFormattedDegrees, useWeatherIcon} from '../../../../../../hooks';
import {getWeatherSelector, useAppSelector} from '../../../../../../store';
import {
  AdditionTemp,
  Container,
  DateString,
  MainTemp,
  SvgWrapper,
  TempWrapper,
  TextWrapper,
} from './styled';
const DegreeView = () => {
  const {data} = useAppSelector(getWeatherSelector);
  const tomorrow = data.forecast.forecastday[1];
  const code = tomorrow.day.condition.code;
  const isDay = 1;
  const dateString = new Date(tomorrow.date).toString().slice(0, 10);
  const {bigWeatherIcon} = useWeatherIcon({code, isDay});
  const {formattedDegree} = useFormattedDegrees(tomorrow.day.avgtemp_c);

  return (
    <Container>
      <SvgWrapper>
        <SvgXml height={110} width={110} xml={bigWeatherIcon} />
      </SvgWrapper>
      <TextWrapper>
        <DateString>{dateString}</DateString>
        <TempWrapper direction="row">
          <MainTemp>{formattedDegree}</MainTemp>
          <AdditionTemp>/{tomorrow.day.mintemp_c.toFixed()}°</AdditionTemp>
        </TempWrapper>
      </TextWrapper>
    </Container>
  );
};

export default DegreeView;
