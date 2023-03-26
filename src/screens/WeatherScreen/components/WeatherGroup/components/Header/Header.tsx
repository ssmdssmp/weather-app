import React from 'react';
import {FlexWrapper, StyledText} from '../../../../../../styled/styled';
import {SvgXml} from 'react-native-svg';
import {date} from './config';
import {useAppSelector} from '../../../../../../store/types';
import {getWeatherSelector} from '../../../../../../store/modules';
import {PressableWithMargin} from './styled';
import {searchIcon} from '../../../../../../assets/kit';

const Header = () => {
  const {data} = useAppSelector(getWeatherSelector);
  const {location} = data;
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

      <PressableWithMargin>
        <SvgXml xml={searchIcon} fill="white" width={20} height={20} />
      </PressableWithMargin>
    </FlexWrapper>
  );
};

export default Header;
