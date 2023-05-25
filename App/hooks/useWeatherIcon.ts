import {useEffect, useState} from 'react';
import {bigWeatherIcons, smallWeatherIcons} from '../assets';
import {weatherIconMap} from './config';

export const useWeatherIcon = ({
  code,
  isDay,
}: {
  code: number;
  isDay: number;
}) => {
  const [bigWeatherIcon, setBigWeatherIcon] = useState(bigWeatherIcons.clouds);
  const [smallWeatherIcon, setSmallWeatherIcon] = useState(
    smallWeatherIcons.clouds,
  );

  useEffect(() => {
    const timeOfDay = isDay ? 'day' : 'night';
    if (code) {
      const {big, small} = weatherIconMap[code][timeOfDay];
      setBigWeatherIcon(big);
      setSmallWeatherIcon(small);
    }
  }, [code, isDay]);

  return {
    bigWeatherIcon,
    smallWeatherIcon,
  };
};
