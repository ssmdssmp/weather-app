/* eslint-disable react-native/no-inline-styles */
import {Animated, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {TSearchListItemProps} from './types';
import {StyledText, Wrapper} from './styled';
import {
  useAppDispatch,
  useAppSelector,
  getWeatherSelector,
  weatherActions,
} from '../../../../../../store';

import {useThemeColor} from '../../../../../../hooks';

const SearchListItem = ({settings}: TSearchListItemProps) => {
  const {theme} = useAppSelector(getWeatherSelector);
  const opacityAnimationRef = useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();
  const marginTopAnimationRef = useRef(new Animated.Value(20)).current;
  const {color} = useThemeColor(theme);
  const setNewLocation = (city: string) => {
    dispatch(weatherActions.getCurrentWeather(city));
  };

  useEffect(() => {
    Animated.timing(opacityAnimationRef, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(marginTopAnimationRef, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <StyledText>
            {settings.name}, {settings.country}
          </StyledText>
        </Wrapper>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default SearchListItem;
