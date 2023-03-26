import React from 'react';
import {CalendarList, Header, TomorrowGroup} from './components';
import {StyledScreenWrapper} from './styled';

const CalendarScreen = () => {
  return (
    <StyledScreenWrapper>
      <Header />
      <TomorrowGroup />
      <CalendarList />
    </StyledScreenWrapper>
  );
};

export default CalendarScreen;
