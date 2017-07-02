import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store.js';
import Navigator from './src/components/navigator/Navigator.js';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
