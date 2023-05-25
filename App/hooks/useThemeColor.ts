import {useEffect, useState} from 'react';
import {Colors} from '../styled';

export const useThemeColor = (theme: 'light' | 'dark') => {
  const [color, setColor] = useState(Colors.blue);
  const [screenColor, setScreenColor] = useState(Colors.screenLight);
  useEffect(() => {
    switch (theme) {
      case 'light': {
        setColor(Colors.blue);
        setScreenColor(Colors.screenLight);
        break;
      }
      case 'dark': {
        setColor(Colors.darkBlue);
        setScreenColor(Colors.screenDark);
        break;
      }
    }
  }, [theme]);
  return {color, screenColor};
};
