import styled from 'styled-components/native';
import {TContainer} from './types';

export const Container = styled.View<TContainer>`
  position: absolute;
  left: ${({left}) => left + 'px'};
  top: ${({top}) => top + 'px'};
`;
