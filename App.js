import React, { Component } from 'react';
import { Image, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store.js';
import Drawer from './src/components/drawer/Drawer.js';
import { SplashScreen, AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
// import MapView from 'react-native-maps'

class App extends Component {

  state = {
    isSplashReady: false,
    isAppReady: false
  }

  cacheSplasheResources = async () => {
    const img = require('./assets/images/drawerBackground.png');
    return Asset.fromModule(img).downloadAsync();
  }

  cacheResourcesAsync = async () => {
    SplashScreen.hide();

    const images = [
      require('./assets/images/aboutCompanyPanel500px.png'),
      require('./assets/images/BG.png'),
      require('./assets/images/backgroundImage.png'),
      require('./assets/images/calculatorCalculations.png'),
      require('./assets/images/calculationImage1.jpg'),
      require('./assets/images/calculationImage2.jpg'),
      require('./assets/images/calculationImage3.jpg'),
      require('./assets/images/calculationImage4.jpg'),
      require('./assets/images/calculationImage5.jpg'),
      require('./assets/images/calculationImage6.jpg'),
      require('./assets/images/buttonProceedWhite.png'),
      require('./assets/images/calculator.png'),
      require('./assets/images/calculatorDefault.png'),
      require('./assets/images/calculatorSelected.png'),
      require('./assets/images/calendarCalculations.png'),
      require('./assets/images/caseCalculations.png'),
      require('./assets/images/contractDefault.png'),
      require('./assets/images/contractSelected.png'),
      require('./assets/images/drawerLogo.png'),
      require('./assets/images/logoSettings.png'),
      require('./assets/images/user1.png'),
      require('./assets/images/user.png'),
      require('./assets/images/english.png'),
      require('./assets/images/serbie.png'),
      require('./assets/images/folder.png'),
      require('./assets/images/iconCalendarsmall.png'),
      require('./assets/images/iconCompany.png'),
      require('./assets/images/iconteam.png'),
      require('./assets/images/iconTransfer.png'),
      require('./assets/images/incentiveImage.png'),
      require('./assets/images/milkaSlika.png'),
      require('./assets/images/newspaperDefault.png'),
      require('./assets/images/newspaperSelected.png'),
      require('./assets/images/onlyTax.png'),
      require('./assets/images/panel.png'),
      require('./assets/images/pioTax.png'),
      require('./assets/images/servicesImagex.png'),
      require('./assets/images/Shape.png'),
      require('./assets/images/taxDefault.png'),
      require('./assets/images/taxesImage.png'),
      require('./assets/images/taxSelected.png'),
      require('./assets/images/walletCalculations.png'),
      require('./assets/images/abaxis.png'),
      require('./assets/images/iconClients.png'),

    ];

    const cacheImages = images.map(image => {
        return Asset.fromModule(image).downloadAsync();
    });

    const cacheFonts = Font.loadAsync({
      'openSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'openSansLight':require('./assets/fonts/OpenSans-Light.ttf'),
      'merriweatherBold': require('./assets/fonts/Merriweather/Merriweather-Bold.ttf'),
      'merriweatherRegular': require('./assets/fonts/Merriweather/Merriweather-Regular.ttf'),
      'IBMPlexSansRegular': require('./assets/fonts/IBMPlexSans-Regular.ttf'),
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
          source={require('./assets/images/splash.png')}
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
