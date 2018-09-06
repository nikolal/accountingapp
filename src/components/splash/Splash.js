import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Text, PixelRatio, TouchableOpacity, StyleSheet, AsyncStorage, Image, ImageBackground,  AppRegistry, Animated, Easing, TouchableHighlight } from 'react-native';
import { Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
// import { LinearGradient } from 'expo';

const { width } = Dimensions.get('window')

class Splash extends Component {

  static navigationOptions = {
    header: null
  }

    constructor () {
      super();
      this.animatedValue1 = new Animated.Value(0)
      this.animatedValue2 = new Animated.Value(0)
      this.animatedValue3 = new Animated.Value(0)
    }

    componentDidMount () {
      this.animate();
    }

    animate () {
      this.animatedValue1.setValue(0);
      this.animatedValue2.setValue(0);
      this.animatedValue3.setValue(0);
      const createAnimation = function (value, duration, easing, delay = 0) {
        return Animated.timing(
         value,
          {
            toValue: 1,
            duration,
            easing,
            delay
          }
        );
      };
      Animated.parallel([
        createAnimation(this.animatedValue1, 2000, Easing.ease, 2000),
        createAnimation(this.animatedValue2, 2000, Easing.ease, 1000),
        createAnimation(this.animatedValue3, 1000, Easing.ease, 500)
      ]).start();
    }

    render () {
      // const scaleText = this.animatedValue1.interpolate({
      //   inputRange: [0, 1],
      //   outputRange: [0.5, 2]
      // });
      const introButton = this.animatedValue3.interpolate({
        inputRange: [0, 1],
        outputRange: [300, 130]
      });

      const introButton2 = this.animatedValue2.interpolate({
        inputRange: [0, 1],
        outputRange: [800, 300]
      });

      const introButton3 = this.animatedValue1.interpolate({
        inputRange: [0, 1],
        outputRange: [800, 350]
      });

      return (
        <ImageBackground source={images.drawerBackground} style={[styles.container]}>

          <Animated.View style={{top: introButton, position: 'absolute'}}>
            <View style={styles.logoImageContainer}>
              <Image source={images.whiteLogo} style={styles.logoImage} />
            </View>
          </Animated.View>

          <Animated.View style={{top: introButton2, position: 'absolute'}}>
            <Text style={styles.text}>Together</Text>
          </Animated.View>

          <Animated.View style={{top: introButton3, position: 'absolute'}}>
            <Text style={styles.textBottom}>WE make It happen.</Text>
          </Animated.View>

        </ImageBackground>
      );
    }
  }



  AppRegistry.registerComponent('Splash', () => Splash);


export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    opacity: 1.0,
    height: 177.26 / 2,
    width: 498.24 / 2
  },
  logoImageContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff20',
  },
  text: {
    fontSize: 30,
    color: colors.white,
    fontFamily: 'openSansRegular',
  },
  textBottom: {
    fontSize: 30,
    color: colors.white,
    fontFamily: 'openSansRegular',
  }
});