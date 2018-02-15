import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store.js';
import Drawer from './src/components/drawer/Drawer.js';

const App = () => {
  return (
    <Provider store={store}>
      <Drawer />
    </Provider>
  );
};

export default App;
