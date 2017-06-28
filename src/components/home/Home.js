import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTestData } from './HomeContainer';

// Check destructuring ( no reassignment lint)
const Home = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.updateTestData('adasd')}>
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
  updateTestData: bindActionCreators(updateTestData, dispatch)
});

export default connect(
  stateToProps,
  dispatchToProps,
)(Home);

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});
