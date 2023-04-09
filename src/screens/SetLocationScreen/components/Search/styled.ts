import styled from 'styled-components/native';
import {FlexWrapper} from '../../../../styled';
import {TSearchInput} from './types';

export const Wrapper = styled(FlexWrapper)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const StyledInput = styled.TextInput<TSearchInput>`
  border: 2px solid ${({bgColor}) => bgColor};
  width: 100%;
  padding: 0px 10px;
  height: 60px;
  max-width: 600px;
  background-color: transparent;
  color: ${({bgColor}) => bgColor};
  font-size: 17px;
  font-weight: bold;
  margin-top: 2%;
  border-radius: 10px;
`;
export const InputWrapper = styled(FlexWrapper)`
  align-items: center;
`;
