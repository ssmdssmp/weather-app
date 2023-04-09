import {
  Animated,
  Pressable,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TSearchListItemProps} from './types';
import {Wrapper} from './styled';
import {useAppDispatch, useAppSelector} from '../../../../../../store/types';
import {getWeatherSelector} from '../../../../../../store/modules';
import {useThemeColor} from '../../../../../../hooks/useThemeColor';
import {weatherActions} from '../../../../../../store/modules/weather/reducer';

const SearchListItem = ({settings, setPage}: TSearchListItemProps) => {
  const {theme, data} = useAppSelector(getWeatherSelector);
  const opacityAnimationRef = useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();
  const marginTopAnimationRef = useRef(new Animated.Value(20)).current;
  const {color} = useThemeColor(theme);

  const setNewLocation = (city: string) => {
    dispatch(weatherActions.getCurrentWeather(city));
  };

  useEffect(() => {
    Animated.timing(
      opacityAnimationRef, // The animated value to drive
      {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      },
    ).start();
    Animated.timing(marginTopAnimationRef, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setNewLocation(settings.name);
      }}>
      <Animated.View
        style={{
          opacity: opacityAnimationRef,
          marginTop: marginTopAnimationRef,
          backgroundColor: color,
          borderRadius: 8,
        }}>
        <Wrapper>
          <Text style={{color: 'white', fontSize: 17}}>
            {settings.name}, {settings.country}
          </Text>
        </Wrapper>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default SearchListItem;
