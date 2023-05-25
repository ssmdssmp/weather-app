import React from 'react';
import {
  getWeatherSelector,
  TForecastWeatherItem,
  useAppSelector,
} from '../../../../../../store';
import {SvgXml} from 'react-native-svg';
import {
  useFormattedDegrees,
  useWeatherIcon,
  useColoredSvg,
  useThemeColor,
} from '../../../../../../hooks';
import {Colors, FlexWrapper} from '../../../../../../styled';
import {AvgTempString, DateString, Wrapper} from './styled';

const ListItem = ({settings}: {settings: TForecastWeatherItem}) => {
  const {theme} = useAppSelector(getWeatherSelector);
  const {color} = useThemeColor(theme);
  console.log(theme);
  const {smallWeatherIcon} = useWeatherIcon({
    code: settings.day.condition.code,
    isDay: 1,
  });
  const {coloredIcon} = useColoredSvg({
    xmlCode: smallWeatherIcon,
    color: Colors.white,
  });
  const averageTemperature = useFormattedDegrees(
    settings.day.avgtemp_c,
  ).formattedDegree;
  const minimalTemperature = useFormattedDegrees(
    settings.day.mintemp_c,
  ).formattedDegree;
  const formattedDate = new Date(settings.date).toDateString().slice(0, 10);
  return (
    <Wrapper bgColor={color}>
      <DateString>{formattedDate}</DateString>
      <SvgXml xml={coloredIcon} />
      <FlexWrapper direction="row">
        <AvgTempString color={color}>{averageTemperature}</AvgTempString>
        <AvgTempString color={color}>/{minimalTemperature}</AvgTempString>
      </FlexWrapper>
    </Wrapper>
  );
};

export default ListItem;
