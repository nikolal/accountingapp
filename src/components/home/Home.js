import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testApi, testApiInit } from '../../../config/api.js';
import { updateTest1Data, updateTest2Data } from './HomeContainer';
import Task from 'data.task';
// import Either from 'data.either';

const Home = (props) => {

const httpRequest = (url, init) =>
  new Task((rej, res) => // Task monad for handling async requests
    fetch(url, init)
      .then(r => r.json())
      .then(d => res(d))
      .catch(e => rej(e)));

const getData = (url, init) =>
  httpRequest(url, init)
    .map(r => r.title)
    .fork(e => console.log(e), // fork error or response from Task monad
          x => props.updateTest2Data(x));

  return (
    <View>
      <TouchableOpacity onPress={() => props.updateTest1Data('Updated test 1 data')}>
        <Text style={styles.text}>{props.test1Data}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getData(testApi, testApiInit)}>
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
