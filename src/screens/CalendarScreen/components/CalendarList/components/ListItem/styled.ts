import styled from 'styled-components/native';
import {Colors} from '../../../../../../styled';
import {TTextWithColorProp} from '../../../../../../types';

export const DateString = styled.Text<TTextWithColorProp>`
  font-size: 14px;
  color: ${({color}) => color || Colors.blue};
  font-weight: bold;
`;
export const AvgTempString = styled.Text<TTextWithColorProp>`
  color: ${({color}) => color || Colors.blue};
  font-weight: bold;
  font-size: 14px;
`;
