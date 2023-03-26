import React from 'react';
import {SvgXml} from 'react-native-svg';
import {searchIcon} from '../../../../assets/kit';
import {getWeatherSelector} from '../../../../store/modules';
import {useAppSelector} from '../../../../store/types';
import {HeaderWrapper, StyledText} from './styled';

const Header = () => {
  const {theme, data} = useAppSelector(getWeatherSelector);
  const city = data.location.name;
  return (
    <HeaderWrapper>
      <StyledText color={theme}>Later in {city}</StyledText>
      <SvgXml width={20} height={20} fill={theme} xml={searchIcon} />
    </HeaderWrapper>
  );
};

export default Header;
