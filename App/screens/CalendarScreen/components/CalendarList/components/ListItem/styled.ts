import styled from 'styled-components/native';
import {Colors, FlexWrapper} from '../../../../../../styled';
import {TTextWithColorProp} from '../../../../../../types';

export const DateString = styled.Text`
  font-size: 17px;
  color: white;
  /* font-weight: bold; */
`;
export const AvgTempString = styled.Text<TTextWithColorProp>`
  color: white;
  font-weight: bold;
  font-size: 17px;
`;
export const Wrapper = styled(FlexWrapper)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0px 10px;
  border-radius: 8px;
  height: 50px;
`;
