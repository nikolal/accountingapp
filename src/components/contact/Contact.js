import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';

class Contact extends Component {

  state = { 
    nameText: '',
    companyText: '',
    email: ''
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'CONTACT',
  })

  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.googleMapContainer}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Serbia_1913.PNG/270px-Serbia_1913.PNG' }}
          />

          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>Mlatisumina 19, 11 000 Beograd</Text>
            <Text style={styles.addressText}>office@tmconsulting.co.rs</Text>
            <Text style={styles.addressText}>+381 11 344-81-69</Text>
            <Text style={styles.addressText}>+381 64 614-29-44</Text>            
          </View>

          <Text style={styles.askQuestion}>Ask us a question</Text>

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
        </View>
      </ScrollView>
    );
  }
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey
  },
  innerContainer: {
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
  googleMapContainer: {
    height: Dimensions.get('window').height / 3.5,
  },
  addressContainer: {
    margin: metrics.medium
  },
  addressText: {
    fontSize: fonts.size.medium,
    color: colors.grey,
    marginBottom: metrics.small
  },
  askQuestion: {
    alignSelf: 'center',
    backgroundColor: 'rgb(252, 234, 233)',
    marginHorizontal: metrics.large,
    padding: metrics.medium,
    fontSize: fonts.size.large,
    borderRadius: metrics.medium
  },
  textInputContainer: {
    // backgroundColor: 'rgb(255, 255, 128)'
  },
  text: {
    fontSize: fonts.size.medium
  }
});
