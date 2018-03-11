import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
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
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://creditarmy.org/wp-content/uploads/2017/05/OurTeam.jpg' }}
          />

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
              style={{height: 60, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={(message) => this.setState({message})}
              value={this.state.message}
            /> 
          </View>

          <TouchableOpacity onPress={this.submitData} style={styles.button}>
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

ConcatMessage.propTypes = { // eslint-disable-line

};

export default ConcatMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  inputsContainer: {
    flex: 1,
    margin: metrics.medium,
    padding: metrics.medium,
    backgroundColor: colors.white,
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
  image: {
    height: Dimensions.get('window').height / 4,
  },
  textInputContainer: {
    margin: metrics.medium
  },
  text: {
    fontSize: fonts.size.medium
  },
  button: {
    padding: metrics.large,
    backgroundColor: 'rgb(230, 230, 230)',
    alignSelf: 'center',
    borderRadius: metrics.small,

  },
  buttonText: {
    fontSize: fonts.size.large,
    fontWeight: fonts.weight.large
  }
});
