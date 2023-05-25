import React from 'react';
import {DismissKeyboard, Search} from './components';
import {useAppSelector, getWeatherSelector} from '../../store';
import {useThemeColor} from '../../hooks';
import {StyledScreenWrapper} from './styled';
import {TSetLocationScreenProps} from './types';

const SetLocationScreen = ({setPage}: TSetLocationScreenProps) => {
  const {theme} = useAppSelector(getWeatherSelector);
  const {screenColor} = useThemeColor(theme);

  return (
    <StyledScreenWrapper bgColor={screenColor}>
      <Search setPage={setPage} />
      <DismissKeyboard />
    </StyledScreenWrapper>
  );
};

export default SetLocationScreen;
