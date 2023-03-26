import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {SearchWrapper} from './styled';
const Search = () => {
  return (
    <SearchWrapper>
      <FlatList
        renderItem={({item}) => (
          <View>
            <Text>123</Text>
          </View>
        )}
        data={[1, 2, 3]}
      />
    </SearchWrapper>
  );
};

export default Search;
