export type TWeatherApiRequestPayload = {
  locationQuery: string;
};
export type TWeatherApiResponse = {
  data: TWeatherData;
};
export type TIPApiResponse = {
  data: typeTIPApiData;
};
export type typeTIPApiData = {
  as: string;
  city: string;
  country: string;
  countryCode: string;
  isp: string;
  lat: string;
  lon: string;
  org: string;
  query: string;
  region: string;
  regionName: string;
  status: string;
  timezone: string;
  zip: string;
};
export type TWeatherError = {
  isError: boolean;
  errorMessage: string;
};
export interface IUnionSelectedWeather
  extends TWeatherDataCurrent,
    TForecastWeatherHourItem,
    TForecastWeatherItem {}

export type TWeatherState = {
  data: TWeatherData;
  loading: boolean;
  error: TWeatherError;
  theme: 'light' | 'dark';
  showIsYourCityTooltip: boolean;
};

// type TSelectedWeatherDataType = 'hour' | 'day' | 'current';

// export type TSetSelectedWeatherPayload = {
//   type: TSelectedWeatherDataType;
//   data: 'hour' extends TSelectedWeatherDataType
//     ? TForecastWeatherHourItem
//     : TForecastWeatherItem;
// };

export type TWeatherDataLocation = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};
export type TWeatherDataCurrent = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};
export type TForecastWeatherHourItem = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
};
export type TForecastWeatherItem = {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    uv: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
    is_moon_up: 0 | 1;
    is_sun_up: 0 | 1;
  };
  hour: TForecastWeatherHourItem[];
};

export type TWeatherData = {
  location: TWeatherDataLocation;
  current: TWeatherDataCurrent;
  forecast: {
    forecastday: TForecastWeatherItem[];
  };
};

export type TSetPagePayload = {
  payload: number;
};
