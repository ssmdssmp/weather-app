/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {useDebouncedValue, useThemeColor} from '../../../../hooks';
import {
  getSearchSelector,
  getWeatherSelector,
  searchActions,
  useAppSelector,
  useAppDispatch,
} from '../../../../store';

import {SearchListHeaderComponent, SearchListItem} from './components';
import {
  SearchIcon,
  SearchItemSeparator,
  SearchListSeparator,
  StyledInput,
  Wrapper,
} from './styled';
import {Animated} from 'react-native';
import {searchIcon} from '../../../../assets/kit';
import {TSearchProps} from './types';
import {Colors} from '../../../../styled';
import {FlatListStyles, ListHeaderComponentStyle} from './config';

const Search = ({setPage}: TSearchProps): JSX.Element => {
  const {list} = useAppSelector(getSearchSelector);
  const {theme, data} = useAppSelector(getWeatherSelector);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const {debouncedValue} = useDebouncedValue(inputValue);
  const [abortController, setAbortController] = useState(new AbortController());
  const {color} = useThemeColor(theme);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputValue = (value: string) => {
    setInputValue(value);
    abortController.abort();
    setAbortController(new AbortController());
  };

  useEffect(() => {
    if (debouncedValue.length === 0) {
      Animated.timing(flatlistOpacityRef, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setTimeout(() => {
        dispatch(searchActions.setList([]));
      }, 301);
    } else {
      Animated.timing(flatlistOpacityRef, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    const timeoutSearchRequest = setTimeout(() => {
      if (debouncedValue.length >= 3) {
        dispatch(searchActions.getList(debouncedValue));
      }
    }, 500);
    return () => {
      clearTimeout(timeoutSearchRequest);
    };
  }, [debouncedValue, dispatch]);

  const flatlistOpacityRef = useRef(
    new Animated.Value(isFocused ? 0 : 1),
  ).current;

  useEffect(() => {
    Animated.timing(flatlistOpacityRef, {
      toValue: isFocused ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  useEffect(() => {
    setPage(1);
    setInputValue('');
  }, [data.forecast]);

  return (
    <Wrapper>
      <SearchIcon
        xml={searchIcon}
        fill={isFocused ? Colors.white : Colors.whiteLowOpacity}
      />
      <StyledInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        bgColor={color}
        value={inputValue}
        placeholderTextColor={Colors.whiteLowOpacity}
        placeholder={data.location.name}
        selectionColor={Colors.white}
        onChangeText={handleInputValue}
      />
      <SearchListSeparator bgColor={color} />

      <Animated.FlatList
        style={{
          ...FlatListStyles,
          opacity: flatlistOpacityRef,
        }}
        data={list}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        //@ts-ignore
        ListHeaderComponentStyle={{
          backgroundColor: color,
          ...ListHeaderComponentStyle,
        }}
        ListHeaderComponent={isFocused ? <SearchListHeaderComponent /> : null}
        renderItem={({item}) => <SearchListItem settings={item} />}
        ItemSeparatorComponent={SearchItemSeparator}
      />
    </Wrapper>
  );
};

export default Search;
