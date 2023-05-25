import {SvgXml} from 'react-native-svg';
import styled from 'styled-components/native';

export const StyledIcon = styled(SvgXml)`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const ItemText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const Wrapper = styled.TouchableWithoutFeedback`
  height: 100%;
`;
