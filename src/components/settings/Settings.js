import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { SimpleLineIcons }  from '@expo/vector-icons';
// import { saveArticle } from './NewsContainer.js';
// import { metrics, colors, fonts } from '../../theme';

class Settings extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Settings</Text>
      </ScrollView>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


