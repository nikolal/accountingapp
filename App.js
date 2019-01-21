import React, { Component } from 'react';
import { ActivityIndicator, Asset, Image } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store.js';
import Drawer from './src/components/drawer/Drawer.js';
import { Font } from 'expo';

const cacheImages = (images) =>
  images.map(image => {
    typeof image === 'string' ?
      Image.prefetch(image) :
      Asset.fromModule(image).downloadAsync();
  });

class App extends Component {

  state = {
    fontLoaded: false
  }

  componentDidMount = () => {
    Font.loadAsync({
      'openSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'openSansLight':require('./assets/fonts/OpenSans-Light.ttf'),
    })
    .then(() => this.setState({ fontLoaded: true}));
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/drawerBackground.png'),
      require('./assets/images/backgroundImage.png'),
      require('./assets/images/calculationsPanel.png'),
      require('./assets/images/calculatorCalculations.png'),
      require('./assets/images/imageCalculation.png'),
      require('./assets/images/caseCalculations.png'),
      require('./assets/images/calendarCalculations.png'),
      require('./assets/images/panel05.png'),
      require('./assets/images/walletCalculations.png'),
      require('./assets/images/manUser.png'),
      require('./assets/images/onlyTax.png'),
      require('./assets/images/incentiveImage.png'),
      require('./assets/images/aboutCompanyPanel500px.png'),
      require('./assets/images/milkaSlika.png'),
      require('./assets/images/servicesImagex.png'),
      require('./assets/images/taxesImage.png'),
    ]);

    await Promise.all([...imageAssets]);
  }

  render () {
    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <Drawer />
        </Provider>
      );
    } else {
      return <ActivityIndicator size="small" color="grey" animating />;
    }
  }
}

export default App;
