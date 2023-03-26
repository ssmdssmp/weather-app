import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {StyledGestureHandlerRootView} from './src/styled';
import TestScreen from './src/screens/TestScreen';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StyledGestureHandlerRootView>
        <TestScreen />
      </StyledGestureHandlerRootView>
    </Provider>
  );
}

export default App;
