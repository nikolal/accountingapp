import React, { Component } from 'react';
import { Image, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store.js';
import Drawer from './src/components/drawer/Drawer.js';
import { Font, SplashScreen, Asset, AppLoading } from 'expo';

class App extends Component {

  state = {
    isSplashReady: false,
    isAppReady: false
  }

  cacheSplasheResources = async () => {
    const img = require('./assets/images/caseCalculations.png');
    return Asset.fromModule(img).downloadAsync();
  }

  cacheResourcesAsync = async () => {
    SplashScreen.hide();

    const images = [
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
      require('./assets/images/calculationsPanel.png'),
      require('./assets/images/BG.png'),

    ];

    const cacheImages = images.map(image => {
        return Asset.fromModule(image).downloadAsync();
    });

    const cacheFonts = Font.loadAsync({
      'openSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'openSansLight':require('./assets/fonts/OpenSans-Light.ttf'),
    });

    await Promise.all([cacheImages, cacheFonts]);
    this.setState({ isAppReady: true });
  }

  render () {
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this.cacheSplasheResources}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady){
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
          }}
          source={require('./assets/images/drawerBackground.png')}
          onLoad={this.cacheResourcesAsync}
        />
      );
    }

    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    );
  }
}

export default App;
