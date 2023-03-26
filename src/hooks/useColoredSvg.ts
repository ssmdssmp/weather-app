import {useState, useEffect} from 'react';
import {smallWeatherIcons} from '../assets';
export const useColoredSvg = ({
  xmlCode,
  color,
}: {
  xmlCode: string;
  color: string;
}) => {
  const [coloredIcon, setColoredIcon] = useState(smallWeatherIcons.clouds);

  useEffect(() => {
    if (
      xmlCode === smallWeatherIcons.moon ||
      xmlCode === smallWeatherIcons.sun ||
      xmlCode === smallWeatherIcons.drizzle ||
      xmlCode === smallWeatherIcons.rain ||
      xmlCode === smallWeatherIcons.snow
    ) {
      const newXml = xmlCode.replace(/fill="[^"]*"/g, `fill="${color}"`);
      setColoredIcon(newXml);
    } else {
      const newXml = xmlCode.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
      setColoredIcon(newXml);
    }
  }, [xmlCode, color]);
  return {coloredIcon};
};
