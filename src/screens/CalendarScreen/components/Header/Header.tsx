import React from 'react';
import {useThemeColor} from '../../../../hooks';
import {useAppSelector, getWeatherSelector} from '../../../../store';
import {HeaderWrapper, StyledText} from './styled';

const Header = () => {
  const {theme, data} = useAppSelector(getWeatherSelector);
  const city = data.location.name;
  const {color} = useThemeColor(theme);
  return (
    <HeaderWrapper>
      <StyledText color={color}>Later in {city}</StyledText>
    </HeaderWrapper>
  );
};

export default Header;
