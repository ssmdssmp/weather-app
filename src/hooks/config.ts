import {smallWeatherIcons, bigWeatherIcons} from '../assets';
export const weatherIconMap: {
  [code: number]: {[isDay: string]: {big: string; small: string}};
} = {
  1000: {
    day: {
      big: bigWeatherIcons.sun,
      small: smallWeatherIcons.sun,
    },
    night: {
      big: bigWeatherIcons.quartMoon,
      small: smallWeatherIcons.moon,
    },
  },
  1003: {
    day: {
      big: bigWeatherIcons.sunClouds,
      small: smallWeatherIcons.cloudsWithSun,
    },
    night: {
      big: bigWeatherIcons.nightCloudsStars,
      small: smallWeatherIcons.clouds,
    },
  },
  1006: {
    day: {
      big: bigWeatherIcons.clouds,
      small: smallWeatherIcons.clouds,
    },
    night: {
      big: bigWeatherIcons.nightCloudsLight,
      small: smallWeatherIcons.clouds,
    },
  },
  1009: {
    day: {
      big: bigWeatherIcons.sunBigClouds,
      small: smallWeatherIcons.cloudsWithSun,
    },
    night: {
      big: bigWeatherIcons.nightCloudsDark,
      small: smallWeatherIcons.clouds,
    },
  },
  1030: {
    day: {
      big: bigWeatherIcons.mist,
      small: smallWeatherIcons.clouds,
    },
    night: {
      big: bigWeatherIcons.nightCloudsMist,
      small: smallWeatherIcons.clouds,
    },
  },
  1063: {
    day: {
      big: bigWeatherIcons.sunRain,
      small: smallWeatherIcons.drizzle,
    },
    night: {
      big: bigWeatherIcons.nightRainLight,
      small: smallWeatherIcons.drizzle,
    },
  },
  1066: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1069: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1072: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.drizzle,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.drizzle,
    },
  },
  1087: {
    day: {
      big: bigWeatherIcons.thunder,
      small: smallWeatherIcons.thunder,
    },
    night: {
      big: bigWeatherIcons.thunder,
      small: smallWeatherIcons.thunder,
    },
  },
  1114: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1117: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1135: {
    day: {
      big: bigWeatherIcons.mist,
      small: smallWeatherIcons.clouds,
    },
    night: {
      big: bigWeatherIcons.nightCloudsMist,
      small: smallWeatherIcons.clouds,
    },
  },
  1147: {
    day: {
      big: bigWeatherIcons.mist,
      small: smallWeatherIcons.clouds,
    },
    night: {
      big: bigWeatherIcons.nightCloudsMist,
      small: smallWeatherIcons.clouds,
    },
  },
  1153: {
    day: {
      big: bigWeatherIcons.sunRain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainLight,
      small: smallWeatherIcons.rain,
    },
  },
  1168: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1171: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1180: {
    day: {
      big: bigWeatherIcons.sunRain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1183: {
    day: {
      big: bigWeatherIcons.rain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1186: {
    day: {
      big: bigWeatherIcons.rain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1189: {
    day: {
      big: bigWeatherIcons.rain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1192: {
    day: {
      big: bigWeatherIcons.rain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1195: {
    day: {
      big: bigWeatherIcons.rain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1198: {
    day: {
      big: bigWeatherIcons.rain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1201: {
    day: {
      big: bigWeatherIcons.rain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1204: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.drizzle,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.drizzle,
    },
  },
  1207: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1210: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1213: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1216: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1219: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1222: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1225: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1237: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1240: {
    day: {
      big: bigWeatherIcons.rain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1243: {
    day: {
      big: bigWeatherIcons.rain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1246: {
    day: {
      big: bigWeatherIcons.rain,
      small: smallWeatherIcons.rain,
    },
    night: {
      big: bigWeatherIcons.nightRainDark,
      small: smallWeatherIcons.rain,
    },
  },
  1249: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1252: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1255: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1258: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1261: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1264: {
    day: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
    night: {
      big: bigWeatherIcons.cloudsSnow,
      small: smallWeatherIcons.snow,
    },
  },
  1273: {
    day: {
      big: bigWeatherIcons.thunder,
      small: smallWeatherIcons.thunder,
    },
    night: {
      big: bigWeatherIcons.thunder,
      small: smallWeatherIcons.thunder,
    },
  },
  1276: {
    day: {
      big: bigWeatherIcons.thunder,
      small: smallWeatherIcons.thunder,
    },
    night: {
      big: bigWeatherIcons.thunder,
      small: smallWeatherIcons.thunder,
    },
  },
  1279: {
    day: {
      big: bigWeatherIcons.thunder,
      small: smallWeatherIcons.thunder,
    },
    night: {
      big: bigWeatherIcons.thunder,
      small: smallWeatherIcons.thunder,
    },
  },
  1282: {
    day: {
      big: bigWeatherIcons.thunder,
      small: smallWeatherIcons.thunder,
    },
    night: {
      big: bigWeatherIcons.thunder,
      small: smallWeatherIcons.thunder,
    },
  },
};
