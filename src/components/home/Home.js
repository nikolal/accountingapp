import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { increaseValue, updateUsername, githubName } from './HomeContainer';
import Future from 'fluture';
import S from 'sanctuary';

const Home = (props) => {

  // Async request example
  const httpRequest = (username) =>
    Future.encaseP(fetch)(`https://api.github.com/users/${username}`) // Future monad wraps fetch
      .chain(res => Future.tryP(_ => res.json()))
      .map(x => x.name)
      .fork(console.error, // Fork extracts value from Future monad (error or value)
        x => props.githubName(S.fromMaybe('/', S.toMaybe(x)))); // If x is null/undefined, Maybe will return '/',

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.increaseValue()}>
        <Text style={styles.text}>{props.value}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => httpRequest(props.username)}>
        <TextInput
          style={{width: 200, height: 40, borderColor: 'green', borderWidth: 1 }}
          onChangeText={text => props.updateUsername(text)}
          value={props.username}
        />
        <Text>GET NAME</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

Home.propTypes = { // eslint-disable-line
  value: PropTypes.number,
  username: PropTypes.string,
  name: PropTypes.string
};

const stateToProps = state => ({
  value: state.homeReducer.value,
  username: state.homeReducer.username,
  name: state.homeReducer.name
});

const dispatchToProps = dispatch => ({
  increaseValue: bindActionCreators(increaseValue, dispatch),
  updateUsername: bindActionCreators(updateUsername, dispatch),
  githubName: bindActionCreators(githubName, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Home);

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
