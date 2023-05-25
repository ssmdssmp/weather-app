import styled from 'styled-components/native';
import {FlexWrapper} from '../../../../styled';

export const TommorowGroupWrapper = styled(FlexWrapper)`
  border-radius: 25px;
  padding: 10px;
  height: 33%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  justify-content: flex-start;
  background-color: ${({bgColor}) => bgColor || '#000'};
`;
export const Headline = styled.Text`
  color: white;
  position: absolute;
  top: 10px;
  left: 10%;
  font-weight: bold;
`;
export const DetailsWrapper = styled.View`
  width: 90%;
`;
