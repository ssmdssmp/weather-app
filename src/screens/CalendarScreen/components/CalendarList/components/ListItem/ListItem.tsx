import React from 'react';
import {
  getWeatherSelector,
  TForecastWeatherItem,
} from '../../../../../../store/modules';
import {SvgXml} from 'react-native-svg';
import {useFormattedDegrees, useNewWeatherIcon} from '../../../../../../hooks';
import {useColoredSvg} from '../../../../../../hooks/useColoredSvg';
import {useAppSelector} from '../../../../../../store/types';
import {FlexWrapper} from '../../../../../../styled';
import {DateString} from './styled';

const ListItem = ({settings}: {settings: TForecastWeatherItem}) => {
  const {theme} = useAppSelector(getWeatherSelector);
  const {smallWeatherIcon} = useNewWeatherIcon({
    code: settings.day.condition.code,
    isDay: 1,
  });
  const {coloredIcon} = useColoredSvg({
    xmlCode: smallWeatherIcon,
    color: theme,
  });
  const averageTemperature = useFormattedDegrees(
    settings.day.avgtemp_c,
  ).formattedDegree;
  const minimalTemperature = useFormattedDegrees(
    settings.day.mintemp_c,
  ).formattedDegree;
  const formattedDate = new Date(settings.date).toDateString().slice(0, 10);
  return (
    <FlexWrapper justify="space-between" direction="row" width="100%">
      <DateString color={theme}>{formattedDate}</DateString>
      <SvgXml xml={coloredIcon} />
      <FlexWrapper direction="row">
        <DateString color={theme}>{averageTemperature}</DateString>
        <DateString color="rgba(0,0,0,0.25)">/{minimalTemperature}</DateString>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default ListItem;
