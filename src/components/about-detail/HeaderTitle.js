import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { colors, fonts } from '../../theme';
// import { saveArticle } from './AboutContainer.js';

class HeaderTitle extends Component {
  render() {
    return (
      this.props.language === 'en' ?
        <Text style={styles.title}>Abaout Detail</Text> :
      this.props.language === 'rs' ?
        <Text style={styles.title}>Detaljnije o nama</Text> :
      null
    );
  }
}

const stateToProps = state => ({
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
});

export default connect(stateToProps, dispatchToProps)(HeaderTitle);

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold'
  }
});
