import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons, Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../../theme';
import { saveArticle } from './ContractAllContainer';
// import HeaderTitle from './HeaderTitle.js';

class ContractCalculations extends Component {

  render() {
    return (
      <Text>jhdhsf</Text>
    );
  }
}

const stateToProps = state => ({
  // about: state.aboutReducer.about,
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(ContractCalculations);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
