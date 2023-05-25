import React from 'react';
import {Container, StyledFlatList, StyledHeader} from './styled';
import HourItem from './components/HourItem';
import {
  useAppSelector,
  getWeatherSelector,
  TForecastWeatherHourItem,
} from '../../../../store';
import {useThemeColor} from '../../../../hooks';
import {ListRenderItem} from 'react-native';

const HoursList = () => {
  const {data, theme} = useAppSelector(getWeatherSelector);
  const currentTime = new Date().getHours();
  const {color} = useThemeColor(theme);
  const renderItem: ListRenderItem<TForecastWeatherHourItem> = ({item}) => (
    <HourItem settings={item} />
  );
  return (
    <Container>
      <StyledHeader color={color}>Later...</StyledHeader>
      {data.forecast.forecastday.length !== 0 ? (
        <StyledFlatList
          showsHorizontalScrollIndicator={false}
          data={data.forecast.forecastday[0].hour
            .filter(
              el => Number(el.time.split(' ')[1].slice(0, 2)) > currentTime,
            )
            .concat(data.forecast.forecastday[1].hour)
            .slice(0, 24)}
          horizontal
          renderItem={renderItem}
        />
      ) : null}
    </Container>
  );
};

export default HoursList;
