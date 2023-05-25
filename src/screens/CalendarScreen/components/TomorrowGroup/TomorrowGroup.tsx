import React from 'react';
import {DetailsWrapper, Headline, TommorowGroupWrapper} from './styled';
import {Details} from '../../../../components';
import {getWeatherSelector, useAppSelector} from '../../../../store';
import {DegreeView} from './components';
import {useThemeColor} from '../../../../hooks';

const TomorrowGroup = () => {
  const {theme} = useAppSelector(getWeatherSelector);
  const {color} = useThemeColor(theme);
  return (
    <TommorowGroupWrapper bgColor={color}>
      <Headline>Tomorrow</Headline>
      <DegreeView />
      <DetailsWrapper>
        <Details isTomorrow />
      </DetailsWrapper>
    </TommorowGroupWrapper>
  );
};

export default TomorrowGroup;
