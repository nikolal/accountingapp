import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image, AppRegistry, Animated, Easing, Text } from 'react-native';
// import { Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
import OurClientsItem from './OurClientsItem.js';

const imageList = [
  <Image
    style={{ width: 50, height: 50, margin: 20, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractDefault.png')}
  />,
  <Image
    style={{ width: 50, height: 50, margin: 20, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 50, height: 50, margin: 20, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 50, height: 50, margin: 20, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractDefault.png')}
  />,
  <Image
    style={{ width: 50, height: 50, margin: 20, backgroundColor: 'red' }}
    source={require('../../../assets/images/contractSelected.png') }
  />,
  <Image
    style={{ width: 50, height: 50, margin: 20, backgroundColor: 'red' }}
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
      <FlatList
        keyExtractor={(item, index) => String(index)}
        data={imageList}
        renderItem={this.renderItem}
        contentContainerStyle={styles.container}
        // numColumns={3}
      />
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
