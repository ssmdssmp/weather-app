import {useEffect, useState} from 'react';
import {bigWeatherIcons, smallWeatherIcons} from '../assets';

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
    switch (code) {
      case 1000: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.sun);
          setSmallWeatherIcon(smallWeatherIcons.sun);
        } else {
          setBigWeatherIcon(bigWeatherIcons.quartMoon);
          setSmallWeatherIcon(smallWeatherIcons.moon);
        }
        break;
      }
      case 1003: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.sunClouds);
          setSmallWeatherIcon(smallWeatherIcons.cloudsWithSun);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightCloudsStars);
          setSmallWeatherIcon(smallWeatherIcons.clouds);
        }
        break;
      }
      case 1006: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.clouds);
          setSmallWeatherIcon(smallWeatherIcons.clouds);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightCloudsLight);
          setSmallWeatherIcon(smallWeatherIcons.clouds);
        }
        break;
      }
      case 1009: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.sunBigClouds);
          setSmallWeatherIcon(smallWeatherIcons.cloudsWithSun);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightCloudsDark);
          setSmallWeatherIcon(smallWeatherIcons.clouds);
        }
        break;
      }
      case 1030: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.mist);
          setSmallWeatherIcon(smallWeatherIcons.clouds);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightCloudsMist);
          setSmallWeatherIcon(smallWeatherIcons.clouds);
        }
        break;
      }
      case 1063: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainLight);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1066: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1069: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1072: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.drizzle);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.drizzle);
        }
        break;
      }
      case 1087: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.thunder);
          setSmallWeatherIcon(smallWeatherIcons.thunder);
        } else {
          setBigWeatherIcon(bigWeatherIcons.thunder);
          setSmallWeatherIcon(smallWeatherIcons.thunder);
        }
        break;
      }
      case 1114: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1117: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1135: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.mist);
          setSmallWeatherIcon(smallWeatherIcons.clouds);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightCloudsMist);
          setSmallWeatherIcon(smallWeatherIcons.clouds);
        }
        break;
      }
      case 1147: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.mist);
          setSmallWeatherIcon(smallWeatherIcons.clouds);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightCloudsMist);
          setSmallWeatherIcon(smallWeatherIcons.clouds);
        }
        break;
      }
      case 1153: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.sunRain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainLight);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1168: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1171: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1180: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.sunRain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1183: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1186: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1189: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1192: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1195: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1198: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1201: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1204: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.drizzle);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.drizzle);
        }
        break;
      }
      case 1207: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1210: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1213: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1216: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1219: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1222: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1225: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1237: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1240: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1243: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1246: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.rain);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        } else {
          setBigWeatherIcon(bigWeatherIcons.nightRainDark);
          setSmallWeatherIcon(smallWeatherIcons.rain);
        }
        break;
      }
      case 1249: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1252: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1255: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1258: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1261: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1264: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        } else {
          setBigWeatherIcon(bigWeatherIcons.cloudsSnow);
          setSmallWeatherIcon(smallWeatherIcons.snow);
        }
        break;
      }
      case 1273: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.thunder);
          setSmallWeatherIcon(smallWeatherIcons.thunder);
        } else {
          setBigWeatherIcon(bigWeatherIcons.thunder);
          setSmallWeatherIcon(smallWeatherIcons.thunder);
        }
        break;
      }
      case 1276: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.thunder);
          setSmallWeatherIcon(smallWeatherIcons.thunder);
        } else {
          setBigWeatherIcon(bigWeatherIcons.thunder);
          setSmallWeatherIcon(smallWeatherIcons.thunder);
        }
        break;
      }
      case 1279: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.thunder);
          setSmallWeatherIcon(smallWeatherIcons.thunder);
        } else {
          setBigWeatherIcon(bigWeatherIcons.thunder);
          setSmallWeatherIcon(smallWeatherIcons.thunder);
        }
        break;
      }
      case 1282: {
        if (isDay === 1) {
          setBigWeatherIcon(bigWeatherIcons.thunder);
          setSmallWeatherIcon(smallWeatherIcons.thunder);
        } else {
          setBigWeatherIcon(bigWeatherIcons.thunder);
          setSmallWeatherIcon(smallWeatherIcons.thunder);
        }
        break;
      }
      default: {
        setBigWeatherIcon(bigWeatherIcons.sun);
        setSmallWeatherIcon(smallWeatherIcons.sun);
        break;
      }
    }
  }, [code, isDay]);

  return {
    bigWeatherIcon,
    smallWeatherIcon,
  };
};
