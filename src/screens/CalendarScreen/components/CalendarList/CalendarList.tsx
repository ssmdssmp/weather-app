import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {getWeatherSelector} from '../../../../store/modules';
import {useAppSelector} from '../../../../store/types';
import {ListItem} from './components';

const CalendarList = () => {
  const {data} = useAppSelector(getWeatherSelector);
  return (
    <FlatList
      style={{width: '90%', marginTop: '10%'}}
      data={data.forecast.forecastday}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      renderItem={({item}) => <ListItem settings={item} />}
    />
  );
};

export default CalendarList;
