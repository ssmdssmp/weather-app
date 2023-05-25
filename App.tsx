import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';
import {StyledGestureHandlerRootView} from './src/styled';
import {PersistGate} from 'redux-persist/integration/react';
import {Navigation} from './src/navigation';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StyledGestureHandlerRootView>
          <Navigation />
        </StyledGestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
