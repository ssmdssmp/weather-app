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
  bottom: -10px;
`;
export const TextWrapper = styled(FlexWrapper)`
  justify-content: flex-end;
  height: 100%;
`;
export const DateString = styled.Text`
  color: white;
  font-size: 20px;
`;
export const MainTemp = styled.Text`
  font-size: 45px;
  color: white;
  font-weight: bold;
`;
export const AdditionTemp = styled.Text`
  font-size: 30px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  margin-top: 15px;
`;
export const TempWrapper = styled(FlexWrapper)`
  flex-direction: row;
  margin-bottom: 20px;
`;
