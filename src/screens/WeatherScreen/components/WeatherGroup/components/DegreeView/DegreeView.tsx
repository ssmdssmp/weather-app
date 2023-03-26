import {FlexWrapper, StyledText} from '../../../../../../styled/styled';
import {SvgXml} from 'react-native-svg';
import React from 'react';
import {useAppSelector} from '../../../../../../store/types';
import {getWeatherSelector} from '../../../../../../store/modules';
import {TWeatherTableDegreeView} from './types';
import {useFormattedDegrees} from '../../../../../../hooks';

const DegreeView = ({weatherIcon}: TWeatherTableDegreeView) => {
  const {data} = useAppSelector(getWeatherSelector);
  const {current} = data;
  const {formattedDegree} = useFormattedDegrees(current.temp_c);
  return (
    <FlexWrapper align="center">
      <SvgXml height={200} width={200} xml={weatherIcon} />
      <StyledText color="white" size={60} weight="bold">
        {formattedDegree}
      </StyledText>
      <StyledText size={20} color="white">
        {current.condition.text.toUpperCase()}
      </StyledText>
    </FlexWrapper>
  );
};

export default DegreeView;
