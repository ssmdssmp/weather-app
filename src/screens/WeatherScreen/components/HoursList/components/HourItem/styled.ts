import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {THourItemContainer} from './types';
import {TTextWithColorProp} from '../../../../../../types';
import {Colors} from '../../../../../../styled';

const height = Dimensions.get('screen').height / 8.5;
const padding = height / 12;
export const Container = styled.Pressable<THourItemContainer>`
  padding: ${padding + 'px'} 0px;
  height: ${height + 'px'};
  width: 55px;
  margin: 0px 4px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-color: ${({bgColor}) => bgColor || '#fff'};
  align-items: center;
  justify-content: space-between;
`;

export const HourText = styled.Text<TTextWithColorProp>`
  font-size: 15px;
  /* font-weight: bold; */
  color: ${({color}) => color || Colors.blue};
`;
