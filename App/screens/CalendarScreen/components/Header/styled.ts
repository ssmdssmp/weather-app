import styled from 'styled-components/native';
import {Colors, FlexWrapper} from '../../../../styled';
import {TTextWithColorProp} from '../../../../types';

export const HeaderWrapper = styled(FlexWrapper)`
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5%;
`;
export const StyledText = styled.Text<TTextWithColorProp>`
  font-size: 18px;
  color: ${({color}) => color || Colors.blue};
  font-weight: bold;
`;
