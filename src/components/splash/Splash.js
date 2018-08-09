import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Text, PixelRatio, TouchableOpacity, StyleSheet, AsyncStorage, Image, ImageBackground } from 'react-native';
import { Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
// import { LinearGradient } from 'expo';


class Splash extends Component {
  // 
  // state = {
  //   splashVisible: true
  // }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <ImageBackground source={images.drawerBackground} style={styles.container} resizeMode="cover">
        <View style={styles.logoImageContainer}>
          <Image source={images.logoImage} style={styles.logoImage} />
        </View>
        <Text style={styles.text}>Introducing an application for tax and finance</Text>
      </ImageBackground>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoImageContainer: {
    marginTop: 94.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: '17.7%',
    backgroundColor:'#ffffff20',
  },
  logoImage: {
    opacity: 1.0,
    height: 177.26 / 2,
    width: 498.24 / 2
  },
  text: {
    textAlign: 'center',
    margin: 50,
    color: colors.white,
    fontSize: fonts.size.huge,
    fontFamily: 'openSansRegular',
  }
});
