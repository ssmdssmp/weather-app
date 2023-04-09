import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDebouncedValue} from '../../../../hooks';
import {useThemeColor} from '../../../../hooks/useThemeColor';
import {getSearchSelector, getWeatherSelector} from '../../../../store/modules';
import {searchActions} from '../../../../store/modules/search/reducer';
import {useAppDispatch, useAppSelector} from '../../../../store/types';
import {SearchListItem} from './components';
import {StyledInput, Wrapper} from './styled';
import {Animated} from 'react-native';
import {weatherActions} from '../../../../store/modules/weather/reducer';
const Search = ({setPage}) => {
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
    console.log(1);
  }, [data.forecast]);

  return (
    <Wrapper>
      <StyledInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        bgColor={color}
        value={inputValue}
        placeholderTextColor={isFocused ? 'rgba(7, 103, 168,0.7)' : color}
        placeholder={data.location.name}
        selectionColor={color}
        onChangeText={handleInputValue}
      />
      <View
        style={{
          width: '30%',
          backgroundColor: color,
          height: 2,
          marginTop: 15,
        }}
      />

      <Animated.FlatList
        style={{
          width: '100%',
          marginTop: 20,
          maxHeight: 280,
          opacity: flatlistOpacityRef,
        }}
        data={list}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        renderItem={({item}) => (
          <SearchListItem setPage={setPage} settings={item} />
        )}
        ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
      />
    </Wrapper>
  );
};

export default Search;
