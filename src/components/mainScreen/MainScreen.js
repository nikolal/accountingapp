import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { metrics, colors, fonts } from '../../theme';

class MainScreen extends Component {

  goAboutDetail = (screenName) => {
    this.props.navigation.navigate(screenName);
  }
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.goAboutDetail('Something')} style={styles.button}>
          <Text style={styles.text}>Something</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goAboutDetail('News')} style={styles.button}>
          <Text style={styles.text}>News</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goAboutDetail('Calculations')} style={styles.button}>
          <Text style={styles.text}>Calculations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goAboutDetail('Taxes')} style={styles.button}>
          <Text style={styles.text}>Taxes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 80,
  },
  button: {
    backgroundColor: colors.grey,
    width: Dimensions.get('window').width / 1.3,
    padding: metrics.medium,
    borderBottomColor: colors.orange,
    borderBottomWidth: 3
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.huge,
  },
});
