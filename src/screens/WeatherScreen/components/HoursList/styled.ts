import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {TForecastWeatherHourItem} from '../../../../store/modules';
import {Colors} from '../../../../styled';
import {TTextWithColorProp} from '../../../../types';
import {StyledFlatListProps} from './types';

export const Container = styled.View`
  margin-top: 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const StyledHeader = styled.Text<TTextWithColorProp>`
  font-weight: bold;
  font-size: 18px;
  color: ${({color}) => color || Colors.blue};
`;
export const StyledFlatList = styled(
  FlatList as new () => FlatList<TForecastWeatherHourItem>,
)<StyledFlatListProps>`
  width: 90%;
  gap: 10px;
`;
