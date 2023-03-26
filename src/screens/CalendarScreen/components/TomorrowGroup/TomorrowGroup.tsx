import React from 'react';
import {DetailsWrapper, Headline, TommorowGroupWrapper} from './styled';
import {Details} from '../../../../components';
import {getWeatherSelector} from '../../../../store/modules';
import {useAppSelector} from '../../../../store/types';
import DegreeView from './components/DegreeView';

const TomorrowGroup = () => {
  const {theme} = useAppSelector(getWeatherSelector);
  return (
    <TommorowGroupWrapper bgColor={theme}>
      <Headline>Tomorrow</Headline>
      <DegreeView />
      <DetailsWrapper>
        <Details isTomorrow />
      </DetailsWrapper>
    </TommorowGroupWrapper>
  );
};

export default TomorrowGroup;
