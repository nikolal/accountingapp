import React, { Component } from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { colors, fonts, images } from '../../theme';
// import { saveArticle } from './AboutContainer.js';

class TaxesTab extends Component {
  render() {
    return (
      this.props.language === 'en' ?
      <Text style={styles.title}>Taxes</Text> :
      this.props.language === 'rs' ?
      <Text style={styles.title}>Porezi</Text> :
      null
    );
  }
}



const stateToProps = state => ({
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
});

export default connect(stateToProps, dispatchToProps)(TaxesTab);

const styles = StyleSheet.create({
  title: {
    color: colors.tabGrey,
    fontSize: fonts.size.small,
    fontFamily: 'openSansBold',
  }
});
