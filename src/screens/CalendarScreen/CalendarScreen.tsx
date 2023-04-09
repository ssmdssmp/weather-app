import React from 'react';
import {useThemeColor} from '../../hooks/useThemeColor';
import {getWeatherSelector} from '../../store/modules';
import {useAppSelector} from '../../store/types';
import {CalendarList, Header, TomorrowGroup} from './components';
import {StyledScreenWrapper} from './styled';

const CalendarScreen = () => {
  const {theme} = useAppSelector(getWeatherSelector);
  const {screenColor} = useThemeColor(theme);
  return (
    <StyledScreenWrapper bgColor={screenColor}>
      <Header />
      <TomorrowGroup />
      <CalendarList />
    </StyledScreenWrapper>
  );
};

export default CalendarScreen;
