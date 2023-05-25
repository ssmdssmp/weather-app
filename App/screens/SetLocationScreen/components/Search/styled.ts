import {SvgXml} from 'react-native-svg';
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
  background-color: ${({bgColor}) => bgColor};
  color: white;
  font-size: 17px;
  font-weight: bold;
  margin-top: 2%;
  border-radius: 10px;
`;
export const InputWrapper = styled(FlexWrapper)`
  align-items: center;
`;
export const SearchIcon = styled(SvgXml)`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 27px;
  right: 20px;
  z-index: 10;
`;

export const SearchListSeparator = styled.View<TSearchInput>`
  width: 30%;
  background-color: ${({bgColor}) => bgColor};
  height: 2px;
  margin-top: 15px;
`;
export const SearchItemSeparator = styled.View`
  height: 10px;
`;
