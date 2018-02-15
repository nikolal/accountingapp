import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SimpleLineIcons }  from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme';

class DrawerTemplate extends Component {

  state = {
    drawerList: [
      { screen: 'Tabs', icon: 'book-open', name: 'News' },
      { screen: 'About', icon: 'people', name: 'About' },
      { screen: 'Contact', icon: 'call-out', name: 'Contact' },
    ]
  };

  goToScreen = screen => this.props.navigation.navigate(screen);

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToScreen(item.screen)} style={styles.item}>
      <SimpleLineIcons name={item.icon} size={20} color="black" />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>

  render() {
    return (
      <View style={styles.container}>
        <Text>Side menu</Text>
        {this.state.drawerList.map(this.renderList)}
      </View>
    );
  }
}

export default DrawerTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: metrics.medium
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.small
  },
  text: {
    fontSize: fonts.size.medium,
    marginLeft: metrics.medium
  }
});
