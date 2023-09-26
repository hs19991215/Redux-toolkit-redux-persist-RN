import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screen/home';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
let persistedStore = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
