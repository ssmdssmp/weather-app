import {useEffect, useState} from 'react';
import {Colors} from '../styled';

export const useThemeColor = (isDay: number) => {
  const [color, setColor] = useState(Colors.blue);
  useEffect(() => {
    const time = new Date().getHours();
    if (isDay) {
      setColor(Colors.blue);
    } else {
      if (time < 4) {
        setColor(Colors.nightBlue);
      } else {
        setColor(Colors.darkBlue);
      }
    }
  }, [isDay]);
  return {color};
};
