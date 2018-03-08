import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';


class ConcatMessage extends Component {

  state = { 
    nameText: '',
    companyText: '',
    email: '',
    message: ''
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'CONTACT US',
  })

  submitData = () => 
    console.log('onPressButton')

  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputsContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>Your name</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={(nameText) => this.setState({nameText})}
              value={this.state.nameText}
            /> 
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>Your company</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={(companyText) => this.setState({companyText})}
              value={this.state.companyText}
            /> 
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            /> 
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>Ask us a question</Text>
            <TextInput
              style={{height: 100, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={(message) => this.setState({message})}
              value={this.state.message}
            /> 
          </View>
          <Button
            onPress={this.submitData}
            title="SEND US MESSAGE"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

      </ScrollView>
    );
  }
}

ConcatMessage.propTypes = { // eslint-disable-line

};

export default ConcatMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey
  },
  inputsContainer: {
    flex: 1,
    margin: metrics.medium,
    padding: metrics.medium,
    backgroundColor: colors.yelllow,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  textInputContainer: {
    margin: metrics.medium
  },
  text: {
    fontSize: fonts.size.medium
  }

});
