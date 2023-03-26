import styled from 'styled-components/native';
import {TWeathterTableContainer} from './types';
export const Container = styled.View<TWeathterTableContainer>`
  position: relative;
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 45px 50px 45px;
  background-color: ${({bgColor}) => bgColor || '#0767a8'};
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
`;
