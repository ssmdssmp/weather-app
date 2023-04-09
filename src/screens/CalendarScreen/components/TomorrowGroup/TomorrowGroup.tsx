import React from 'react';
import {DetailsWrapper, Headline, TommorowGroupWrapper} from './styled';
import {Details} from '../../../../components';
import {getWeatherSelector} from '../../../../store/modules';
import {useAppSelector} from '../../../../store/types';
import DegreeView from './components/DegreeView';
import {useThemeColor} from '../../../../hooks/useThemeColor';

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
