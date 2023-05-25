import React, {useEffect, useState} from 'react';
import {Container, HourText} from './styled';
import {THourItemProps} from './types';
import {
  useFormattedDegrees,
  useFormattedTime,
  useWeatherIcon,
  useColoredSvg,
  useThemeColor,
} from '../../../../../../hooks';
import {SvgXml} from 'react-native-svg';
import {smallWeatherIcons} from '../../../../../../assets';
import {useAppSelector, getWeatherSelector} from '../../../../../../store';
import {Colors} from '../../../../../../styled';

const HourItem = ({settings}: THourItemProps) => {
  const {theme} = useAppSelector(getWeatherSelector);
  const {color} = useThemeColor(theme);
  const {formattedTime} = useFormattedTime(settings.time.split(' ')[1]);
  const {formattedDegree} = useFormattedDegrees(settings.temp_c);
  const {smallWeatherIcon} = useWeatherIcon({
    code: settings.condition.code,
    isDay: settings.is_day,
  });
  const [modifiedIcon, setModifiedIcon] = useState(smallWeatherIcons.clouds);
  const {coloredIcon} = useColoredSvg({
    xmlCode: smallWeatherIcon,
    color: settings.is_day ? color : Colors.white,
  });
  useEffect(() => {
    if (coloredIcon && coloredIcon.length !== 0) {
      setModifiedIcon(coloredIcon);
    }
  }, [coloredIcon]);
  return (
    <Container bgColor={settings.is_day ? Colors.white : color}>
      <HourText color={settings.is_day ? color : Colors.white}>
        {formattedTime}
      </HourText>
      <SvgXml height={25} width={25} xml={modifiedIcon} />
      <HourText color={settings.is_day ? color : Colors.white}>
        {formattedDegree}
      </HourText>
    </Container>
  );
};

export default HourItem;
