import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTestData, updateTest2Data } from './HomeContainer';

// Check destructuring ( no reassignment lint)
const Home = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.updateTest2Data('Test 2')}>
        <Text style={styles.text}>{props.testData}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Maybe to use flow instead ???
// Home.propTypes = {
//   testData: PropTypes.string
// };

const stateToProps = state => ({
  testData: state.homeReducer.testData
});

const dispatchToProps = dispatch => ({
  updateTestData: bindActionCreators(updateTestData, dispatch),
  updateTest2Data: bindActionCreators(updateTest2Data, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Home);

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});
