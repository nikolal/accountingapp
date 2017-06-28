import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTestData } from './HomeContainer';

const Home = ({ testData, updateTestData }) => {

  return (
    <View>
      <TouchableOpacity onPress={() => updateTestData('adasd')}>
        <Text style={styles.text}>{testData}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Maybe to use flow instead ???
Home.propTypes = {
  testData: PropTypes.string
};

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
