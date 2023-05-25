import styled from 'styled-components/native';
import {TFlexWrapper, TStyledText} from './types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Colors} from './colors';
export const FlexWrapper = styled.View<TFlexWrapper>`
  display: flex;
  position: relative;
  width: ${({width}) => width || 'auto'};
  height: ${({height}) => height || 'auto'};
  flex-direction: ${({direction}) => direction || 'column'};
  align-items: ${({align}) => align || 'flex-start'};
  justify-content: ${({justify}) => justify || 'flex-start'};
  max-width: 100%;
  gap: ${({gap}) => gap || 0};
  background-color: ${({bgColor}) => bgColor || 'none'};
`;

export const StyledText = styled.Text<TStyledText>`
  font-size: ${({size}) => size + 'px' || '12px'};
  color: ${({color}) => color || 'black'};
  font-weight: ${({weight}) => weight || 'regular'};
`;

export const ScreenWrapper = styled.SafeAreaView<TFlexWrapper>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${({bgColor}) => bgColor || Colors.screenLight};
`;
export const StyledGestureHandlerRootView = styled(GestureHandlerRootView)`
  flex: 1;
`;
