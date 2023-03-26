import React, {useEffect, useState} from 'react';
import {ListItem} from './components/ListItem';
import {FlexWrapper} from '../../styled/styled';
import {humidity, wind, feelsLike, visibility} from './assets';
import {useAppSelector} from '../../store/types';
import {getWeatherSelector, TForecastWeatherItem} from '../../store/modules';
import {TDetailsComponentProp} from './types';
const Details = ({isTomorrow}: TDetailsComponentProp) => {
  const {data} = useAppSelector(getWeatherSelector);
  const {current, forecast} = data;
  const [tomorrow, setTomorrow] = useState<
    TForecastWeatherItem['day'] | undefined
  >(undefined);
  useEffect(() => {
    if (forecast.forecastday.length !== 0 && isTomorrow) {
      setTomorrow(forecast.forecastday[1].day);
    }
  }, [forecast, isTomorrow]);
  return (
    <FlexWrapper direction="row" justify="center">
      <FlexWrapper direction="row" justify="space-between" width="100%">
        <ListItem
          data={`${tomorrow ? tomorrow.avgtemp_c : current.feelslike_c} °`}
          xml={feelsLike}
          description="Feels like"
        />
        <ListItem
          xml={humidity}
          description="Humidity"
          data={`${tomorrow ? tomorrow.avghumidity : current.humidity} %`}
        />
        <ListItem
          xml={wind}
          description="Wind"
          data={`${tomorrow ? tomorrow.maxwind_mph : current.wind_mph} m/s`}
        />
        <ListItem
          xml={visibility}
          description="Visibility"
          data={`${tomorrow ? tomorrow.avgvis_km : current.vis_km} km`}
        />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default Details;
