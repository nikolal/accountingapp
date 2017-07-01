import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testApi, testApiInit } from '../../../config/api.js';
import { updateTest1Data, updateTest2Data } from './HomeContainer';
import Future from 'fluture';
import S from 'sanctuary';

const Home = (props) => {

  // Async request example
  const httpRequest = (url, init) =>
    Future.tryP(() => fetch(url, init)) // Future monad wraps fetch
      .chain(res => Future.tryP(_ => res.json()))
      .map(x => x.title.j)
      .fork(console.error, // Fork extracts value from Future monad ( error or value)
            x => props.updateTest2Data(S.fromMaybe('/', S.toMaybe(x)))); // If x is null/undefined, Maybe will return '/',

  return (
    <View>
      <TouchableOpacity onPress={() => props.updateTest1Data('Updated test 1 data')}>
        <Text style={styles.text}>{props.test1Data}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => httpRequest(testApi, testApiInit)}>
        <Text style={styles.text}>{props.test2Data}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Maybe to use flow instead ???
// Home.propTypes = {
//   testData: PropTypes.string
// };

const stateToProps = state => ({
  test1Data: state.homeReducer.test1Data,
  test2Data: state.homeReducer.test2Data
});

const dispatchToProps = dispatch => ({
  updateTest1Data: bindActionCreators(updateTest1Data, dispatch),
  updateTest2Data: bindActionCreators(updateTest2Data, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Home);

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});
