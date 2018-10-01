import React, { Component } from 'react';
import { View, StyleSheet, Image, AppRegistry, Animated, Easing, Text } from 'react-native';
// import { Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';



  // const arr = [1, 2, 3, 4, 5];
  // for (var i = 0; i < 20; i++) {
  //   arr.push(i);
  // }

class Splash extends Component {

  constructor (props) {
      super(props);
      this.animatedValue = [];
      this.arr = [];
      props.article.paragraphs.forEach((item) => {
        this.animatedValue[item.value] = new Animated.Value(0);
      });
    }

    componentDidMount () {
      this.animate();
    }

    animate () {
      const animations = this.props.article.paragraphs.map((item) => {
        return Animated.timing(
          this.animatedValue[item.value],
          {
            toValue: 1,
            duration: 100
          }
        );
      });
      Animated.sequence(animations).start();
    }


    render () {
      const animations = this.props.article.paragraphs.map((a, i) => {
        return <Animated.View
          key={i} style={{opacity: this.animatedValue[a.value],
          }}>
          <Image
            style={{ width: 90, height: 90, margin: 20 }}
            source={{uri: a.value}}
          />
        </Animated.View>;
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
