import React, {useEffect, useState} from 'react';
import {Container, HourText} from './styled';
import {THourItemProps} from './types';
import {
  useFormattedDegrees,
  useFormattedTime,
  useWeatherIcon,
} from '../../../../../../hooks';
import {SvgXml} from 'react-native-svg';
import {smallWeatherIcons} from '../../../../../../assets';
import {useColoredSvg} from '../../../../../../hooks/useColoredSvg';
import {useAppSelector} from '../../../../../../store/types';
import {getWeatherSelector} from '../../../../../../store/modules';
import {Colors} from '../../../../../../styled';

const HourItem = ({settings}: THourItemProps) => {
  const {theme} = useAppSelector(getWeatherSelector);
  const {formattedTime} = useFormattedTime(settings.time.split(' ')[1]);
  const {formattedDegree} = useFormattedDegrees(settings.temp_c);
  const {smallWeatherIcon} = useWeatherIcon({
    code: settings.condition.code,
    isDay: settings.is_day,
  });
  const [modifiedIcon, setModifiedIcon] = useState(smallWeatherIcons.clouds);
  const {coloredIcon} = useColoredSvg({
    xmlCode: smallWeatherIcon,
    color: settings.is_day ? theme : Colors.white,
  });
  useEffect(() => {
    if (coloredIcon && coloredIcon.length !== 0) {
      setModifiedIcon(coloredIcon);
    }
  }, [coloredIcon]);
  return (
    <Container bgColor={settings.is_day ? Colors.white : theme}>
      <HourText color={settings.is_day ? theme : Colors.white}>
        {formattedTime}
      </HourText>
      <SvgXml height={20} width={20} xml={modifiedIcon} />
      <HourText color={settings.is_day ? theme : Colors.white}>
        {formattedDegree}
      </HourText>
    </Container>
  );
};

export default HourItem;
