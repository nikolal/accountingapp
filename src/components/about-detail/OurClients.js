import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image, AppRegistry, Animated, Easing, Text, Dimensions } from 'react-native';
// import { Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
import { LinearGradient } from 'expo';
import OurClientsItem from './OurClientsItem.js';

const imageList = [
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractDefault.png')}
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractDefault.png')}
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractDefault.png')}
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractDefault.png')}
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractDefault.png')}
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 90, height: 90, margin: 15, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />
];

class OurClients extends Component {

  renderItem = ({ item, index }) => {
    return (
      <OurClientsItem index={index} >
        {item}
      </OurClientsItem>
    );
}

render() {
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
      <FlatList
        keyExtractor={(item, index) => String(index)}
        data={imageList}
        renderItem={this.renderItem}
        contentContainerStyle={styles.container}
        // numColumns={3}
      />
    </View>
    );
  }
}

export default OurClients;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
