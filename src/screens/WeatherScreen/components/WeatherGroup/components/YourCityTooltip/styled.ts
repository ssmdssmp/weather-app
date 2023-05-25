import {Dimensions} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styled from 'styled-components/native';
import {TComponentWithBgColor} from '../../../../../../types';

const tooltipWidth = Dimensions.get('screen').width - 80;

export const Tooltip = styled.View`
  position: absolute;
  height: 70px;
  width: ${tooltipWidth}px;
  border-radius: 12px;
  padding: 10px;
  z-index: 20;
  top: 90px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 40px;
  background-color: white;
`;

export const TriangleIcon = styled(SvgXml)`
  height: 30px;
  width: 30px;
  position: absolute;
  top: -15px;
  left: 20px;
  transform: rotate(270deg);
`;

export const MainText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

export const TooltipButton = styled.Pressable<TComponentWithBgColor>`
  z-index: 20;
  border-radius: 12px;
  height: 50px;
  padding: 0px 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({bgColor}) => bgColor};
`;
export const FirstTooltipButton = styled(TooltipButton)`
  margin-right: 10px;
`;
export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
