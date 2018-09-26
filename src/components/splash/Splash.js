import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Dimensions, Image, AppRegistry, Animated, Easing, Text } from 'react-native';
// import { Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
import { LinearGradient } from 'expo';



  const arr = [];
  for (var i = 0; i < 12; i++) {
    arr.push(i);
  }

class Splash extends Component {

  constructor () {
      super();
      this.animatedValue = []
      arr.forEach((value) => {
        this.animatedValue[value] = new Animated.Value(0)
      });
    }

    componentDidMount () {
      this.animate();
    }

    animate () {
      const animations = arr.map((item) => {
        return Animated.timing(
          this.animatedValue[item],
          {
            toValue: 1,
            duration: 300
          }
        );
      });
      Animated.sequence(animations).start();
    }


    render () {
      const animations = arr.map((a, i) => {
        return <Animated.View
          key={i} style={{opacity: this.animatedValue[a],
          }}>
          <Image
            style={styles.image}
            source={{uri: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.adapt.945.1.jpg'}}
          />
        </Animated.View>;
      });
      return (
        <View style={styles.container}>
          <LinearGradient
            colors={['rgb(26,52,75)', 'rgb(18,66,89)', 'rgb(16,70,92)']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: Dimensions.get('window').height
            }}
          />
          {animations}
        </View>
      );
    }
  }

  AppRegistry.registerComponent('Splash', () => Splash);

  const stateToProps = state => ({
    article: state.aboutReducer.article,
    language: state.settingsReducer.language

  });
  export default connect(stateToProps, null)(Splash);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
     width: Dimensions.get('window').width / 3.5,
     height: Dimensions.get('window').width / 3.5,
     margin: 5,
     marginTop: metrics.huge
  }
});
