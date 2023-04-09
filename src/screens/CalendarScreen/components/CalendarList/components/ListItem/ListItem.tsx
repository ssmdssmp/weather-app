import React from 'react';
import {
  getWeatherSelector,
  TForecastWeatherItem,
} from '../../../../../../store/modules';
import {SvgXml} from 'react-native-svg';
import {useFormattedDegrees, useNewWeatherIcon} from '../../../../../../hooks';
import {useColoredSvg} from '../../../../../../hooks/useColoredSvg';
import {useAppSelector} from '../../../../../../store/types';
import {Colors, FlexWrapper} from '../../../../../../styled';
import {AvgTempString, DateString, Wrapper} from './styled';
import {useThemeColor} from '../../../../../../hooks/useThemeColor';

const ListItem = ({settings}: {settings: TForecastWeatherItem}) => {
  const {theme} = useAppSelector(getWeatherSelector);
  const {color} = useThemeColor(theme);
  console.log(theme);
  const {smallWeatherIcon} = useNewWeatherIcon({
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
        <AvgTempString>{averageTemperature}</AvgTempString>
        <AvgTempString>/{minimalTemperature}</AvgTempString>
      </FlexWrapper>
    </Wrapper>
  );
};

export default ListItem;
