import styled from 'styled-components/native';
import {THourItemContainer} from './types';
import {TTextWithColorProp} from '../../../../../../types';
import {Colors} from '../../../../../../styled';

export const Container = styled.Pressable<THourItemContainer>`
  padding: 10px;
  height: 120px;
  width: 70px;
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
