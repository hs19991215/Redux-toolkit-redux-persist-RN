import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppStackNavigator from './src/navigation/stack';
let persistedStore = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <AppStackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
