import styled from 'styled-components/native';
import {FlexWrapper} from '../../../../../../styled';

export const Container = styled(FlexWrapper)`
  width: 90%;
  flex-direction: row;
  height: 55%;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const SvgWrapper = styled.View`
  position: absolute;
  left: 0;
  bottom: -20;
`;
export const TextWrapper = styled(FlexWrapper)`
  justify-content: flex-end;
  height: 100%;
`;
export const DateString = styled.Text`
  color: white;
  font-size: 20;
`;
export const MainTemp = styled.Text`
  font-size: 45;
  color: white;
  font-weight: bold;
`;
export const AdditionTemp = styled.Text`
  font-size: 30;
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  margin-top: 15;
`;
export const TempWrapper = styled(FlexWrapper)`
  flex-direction: row;
`;
