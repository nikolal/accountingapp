import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';


class ConcatMessage extends Component {

  state = {
    contactForms: [{
      id: 'name',
      title: 'Your name',
      value: '',
      style: 'input'
    },{
      id: 'company',
      title: 'Your company',
      value: '',
      style: 'input'
    },{
      id: 'email',
      title: 'Email',
      value: '',
      style: 'input'
    },{
      id: 'question',
      title: 'Your question',
      value: '',
      style: 'textArea'
    }]
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'HLB T&M Consulting',
  })

  submitData = () => false
    // console.log('onPressButton')

  renderForms = (item, index) =>
    <View key={item.id} style={styles.textInputContainer}>
      <Text style={styles.text}>{item.title}</Text>
      <TextInput
        style={styles[item.style]}
        onChangeText={text => {
          const array = this.state.contactForms.slice();
          array[index].value = text; //eslint-disable-line
          this.setState({ contactForms: array });
        }}
        value={this.state.contactForms[index].value}
      />
    </View>

  render(){

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior="padding"
        >
          <Image
            style={styles.image}
            source={{ uri: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Transfer-pricing-Belgrade.jpg' }}
          />
            {this.state.contactForms.map(this.renderForms)}
          <TouchableOpacity onPress={this.submitData} style={styles.button}>
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

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
    backgroundColor: colors.white,
  },
  inputsContainer: {
    // flex: 1,
    padding: metrics.medium,
    backgroundColor: colors.white,
  },
  input: {
    height: 40,
    borderColor: colors.grey,
    borderBottomWidth: 1
  },
  textArea: {
    height: 100,
    borderColor: colors.grey,
    borderBottomWidth: 1
  },
  image: {
    height: Dimensions.get('window').height / 4,
  },
  textInputContainer: {
    margin: metrics.medium
  },
  text: {
    fontSize: fonts.size.medium,
    color: colors.grey,
    fontFamily: 'openSansRegular'
  },
  button: {
    backgroundColor: colors.lightBlue2,
    margin: metrics.large,
    padding: metrics.medium,
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.white,
  }
});
