import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DrawerTemplate extends Component {

  state = {
    drawerList: [{ name: 'Home' }, { name: 'About' }]
  };

  renderList = (item, index) =>
    <View key={index}>
      <Text>{item.name}</Text>
    </View>

  render() {
    return (
      <View>
        {this.state.drawerList.map(this.renderList)}
      </View>
    );
  }
}

export default DrawerTemplate;
