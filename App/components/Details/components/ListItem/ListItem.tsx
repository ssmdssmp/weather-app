import {View} from 'react-native';
import React from 'react';
import {FlexWrapper, StyledText} from '../../../../styled/styled';
import {SvgXml} from 'react-native-svg';
import {TWeatherDetailsListItem} from './types';
const ListItem = ({xml, data, description}: TWeatherDetailsListItem) => {
  return (
    <FlexWrapper gap="5px" align="center" justify="center">
      <View style={{marginBottom: 5}}>
        <SvgXml xml={xml} />
      </View>
      <StyledText style={{fontWeight: 'bold'}} size={18} color="white">
        {data}
      </StyledText>
      <StyledText size={14} color="white">
        {description}
      </StyledText>
    </FlexWrapper>
  );
};

export default ListItem;
