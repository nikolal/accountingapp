import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { increaseValue, updateUsername, updateGithubName } from './HomeContainer';
import Future from 'fluture';
import S from 'sanctuary';
import { fonts, metrics, colors } from '../../theme/index.js';

const Home = (props) => {

  // Async request example
  const getGithubName = username =>
    Future.encaseP(fetch)(`https://api.github.com/users/${username}`) // Future monad wraps fetch
      .chain(res => Future.tryP(_ => res.json()))
      .map(x => x.name)
      .fork(console.error, // Fork extracts value from Future monad (error or value)
        x => props.updateGithubName(S.fromMaybe('/', S.toMaybe(x)))); // If x is null/undefined, Maybe will return '/',

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.increaseValue()}>
        <Text style={styles.text}>{props.value}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        onChangeText={text => props.updateUsername(text)}
        value={props.username}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={() => getGithubName(props.username)}>
        <Text style={styles.buttonText}>GET NAME</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

Home.propTypes = { // eslint-disable-line
  value: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  increaseValue: PropTypes.func.isRequired,
  updateUsername: PropTypes.func.isRequired,
  updateGithubName: PropTypes.func.isRequired
};

const stateToProps = state => ({
  value: state.homeReducer.value,
  username: state.homeReducer.username,
  name: state.homeReducer.name
});

const dispatchToProps = dispatch => ({
  increaseValue: bindActionCreators(increaseValue, dispatch),
  updateUsername: bindActionCreators(updateUsername, dispatch),
  updateGithubName: bindActionCreators(updateGithubName, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: metrics.mediumPadding
  },
  textInput: {
    height: 40,
    borderColor: colors.black,
    borderWidth: metrics.smallBorder,
    textAlign: 'center'
  },
  text: {
    alignSelf: 'center',
    fontSize: fonts.size.xLarge
  },
  button: {
    padding: metrics.smallPadding,
    borderColor: colors.white,
    borderWidth: metrics.smallBorder,
    backgroundColor: colors.black
  },
  buttonText: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: fonts.size.xLarge
  },
});
