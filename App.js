import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/store/store.js';
import Home from './src/components/home/Home.js';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
