import React from 'react';
import {Search} from './components';
import {ScreenWrapper} from '../../styled';
import {useAppSelector} from '../../store/types';
import {getWeatherSelector} from '../../store/modules';
import {useThemeColor} from '../../hooks/useThemeColor';
import {StyledScreenWrapper} from './styled';

const SetLocationScreen = ({setPage}) => {
  const {theme} = useAppSelector(getWeatherSelector);
  const {screenColor} = useThemeColor(theme);
  return (
    <StyledScreenWrapper bgColor={screenColor}>
      <Search setPage={setPage} />
    </StyledScreenWrapper>
  );
};

export default SetLocationScreen;
