import React, { Component } from 'react';
import { View, StyleSheet, Image, AppRegistry, Animated } from 'react-native';
// import { Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
// import { LinearGradient } from 'expo';

// const { width } = Dimensions.get('window')



const arr = [];
for (var i = 0; i < 50; i++) {
  arr.push(i)
}

class Splash extends Component {

  state = {
    images: [
        require('../../../assets/images/face.png'),
        require('../../../assets/images/face.png'),
        require('../../../assets/images/face.png'),
    ]
  }
  constructor () {
    super();
    this.animatedValue = [];
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(0);
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
          duration: 50
        }
      );
    });
    Animated.sequence(animations).start();
  }

  render () {
    const animations = arr.map((a, i) => {
      return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 50, width: 50, backgroundColor: 'blue', marginLeft: 3, marginTop: 3}} />;
    });
    return (
      <View style={styles.container}>
        {animations}
      </View>
    );
  }
}



  AppRegistry.registerComponent('Splash', () => Splash);


export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
