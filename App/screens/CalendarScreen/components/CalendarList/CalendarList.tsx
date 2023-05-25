import React from 'react';
import {Separator, StyledFlatList} from './styled';
import {
  getWeatherSelector,
  TForecastWeatherItem,
  useAppSelector,
} from '../../../../store';
import {ListItem} from './components';

const CalendarList = () => {
  const {data} = useAppSelector(getWeatherSelector);
  const renderItem = ({item}: {item: TForecastWeatherItem}) => {
    return <ListItem settings={item} />;
  };
  return (
    <StyledFlatList
      data={data.forecast.forecastday}
      ItemSeparatorComponent={Separator}
      //@ts-ignore
      renderItem={renderItem}
    />
  );
};

export default CalendarList;
