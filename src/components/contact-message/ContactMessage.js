import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';


class ConcatMessage extends Component {

  state = { 
    contactForms: [{
      id: 'name',
      title: 'Your name',
      value: 'asdf',
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
    title: 'CONTACT US',
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
          array[index].value = text;
          this.setState({ contactForms: array })
        }}
        value={this.state.contactForms[index].value}
      /> 
    </View>

  render(){

    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputsContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://creditarmy.org/wp-content/uploads/2017/05/OurTeam.jpg' }}
          />
            {this.state.contactForms.map(this.renderForms)}
          <TouchableOpacity onPress={this.submitData} style={styles.button}>
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>
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
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderBottomWidth: 1
  },
  textArea: {
    height: 100, 
    borderColor: 'gray', 
    borderBottomWidth: 1
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
    borderRadius: metrics.medium,

  },
  buttonText: {
    fontSize: fonts.size.large,
    fontWeight: fonts.weight.large
  }
});
