import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseValue } from './HomeContainer';
import { metrics, colors, fonts } from '../../theme/index.js';


const Home = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.value}</Text>
    </View>
  );
};

const stateToProps = state => ({
  value: state.homeReducer.value,
});

const dispatchToProps = dispatch => ({
  increaseValue: bindActionCreators(increaseValue, dispatch),
});

export default connect(stateToProps, dispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: fonts.size.medium
  },
});
