import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseValue } from './HomeContainer';

const Home = (props) => {

  return (
    <View style={styles.container}>
      <Text>{props.value}</Text>
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
  }
});
