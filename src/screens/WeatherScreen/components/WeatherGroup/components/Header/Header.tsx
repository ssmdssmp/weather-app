import React from 'react';
import {FlexWrapper, StyledText, Colors} from '../../../../../../styled';
import {date} from './config';
import {
  useAppDispatch,
  useAppSelector,
  getWeatherSelector,
  weatherActions,
} from '../../../../../../store';
import {Switch} from 'react-native';

const Header = () => {
  const {data, theme} = useAppSelector(getWeatherSelector);
  const {location} = data;
  const dispatch = useAppDispatch();
  return (
    <FlexWrapper direction="row" justify="space-between" align="center">
      <FlexWrapper>
        <StyledText size={20} color="white" weight="bold">
          {location.name}
        </StyledText>
        <StyledText size={14} color="white">
          {date}
        </StyledText>
      </FlexWrapper>
      <Switch
        value={theme === 'dark' ? true : false}
        trackColor={{
          false: 'white',
          true: 'white',
        }}
        thumbColor={Colors.blue}
        //@ts-ignore
        onChange={() =>
          dispatch(weatherActions.setTheme(theme === 'dark' ? 'light' : 'dark'))
        }
      />
    </FlexWrapper>
  );
};

export default Header;
