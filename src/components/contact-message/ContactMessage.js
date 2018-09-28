import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts, images } from '../../theme';
import { MailComposer } from 'expo';
import Toast from 'react-native-root-toast';


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

  submitData = () => {
    const options = {
      recipients: ['milana_lukic@yahoo.com'],
      subject: 'AccountingApp',
      body: `
        name: ${this.state.contactForms.filter(x => x.id === 'name')[0].value}
        company: ${this.state.contactForms.filter(x => x.id === 'company')[0].value}
        email: ${this.state.contactForms.filter(x => x.id === 'email')[0].value}
        question: ${this.state.contactForms.filter(x => x.id === 'question')[0].value}
      `
    };
    MailComposer.composeAsync(options)
      .then(res => {
        // console.log(res);
        const toast = Toast.show('Email sent', {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          backgroundColor: 'white',
          textColor: 'black',
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0
        });
        this.props.navigation.navigate('News');
      })
      .catch(err => {
        console.log(err);
        const toast = Toast.show('Error sending email', {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          backgroundColor: 'red',
          textColor: 'white',
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0
        });
      });
  }
    // console.log('onPressButton')

  renderForms = (item, index) =>
    <View key={item.id} style={styles.textInputContainer}>
      <TextInput
        style={styles[item.style]}
        placeholder={'\xa0' + '\xa0' + '\xa0' + '\xa0' + '\xa0' + item.title}
        placeholderTextColor={colors.black}
        onChangeText={text => {
          const array = this.state.contactForms.slice();
          array[index].value = text; //eslint-disable-line
          this.setState({ contactForms: array });
        }}
        value={this.state.contactForms[index].value}
      />
    </View>

  render(){
    console.log(this.state);
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          // style={styles.inputsContainer}
          behavior="padding"
        >
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={images.aboutCompanyPanel500px}
            />
            <Text style={styles.hlbText}>HLB T&M Consulting</Text>
          </View>
            {this.state.contactForms.map(this.renderForms)}
          <TouchableOpacity onPress={this.submitData} style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
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
  input: {
    height: 50,
    borderColor: '#E9E9E9',
    borderWidth: metrics.smallBorder,
    fontSize: fonts.size.small

  },
  textArea: {
    height: 100,
    borderColor: '#E9E9E9',
    borderWidth: metrics.smallBorder,
    fontSize: fonts.size.small
  },
  imageTextContainer: {
    padding: metrics.large,
    borderBottomWidth: metrics.tinyBorder,
    borderColor: '#E9E9E9',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 1.1,
    borderRadius: 10,
  },
  hlbText: {
    fontSize: fonts.size.large,
    color: colors.grey,
    fontFamily: 'openSansBold',
    marginTop: metrics.large
  },
  textInputContainer: {
    margin: metrics.medium,
  },
  text: {
    fontSize: fonts.size.medium,
    color: colors.grey,
    fontFamily: 'openSansRegular'
  },
  button: {
    margin: metrics.large,
    padding: metrics.medium,

    backgroundColor: '#14B7C5',
    borderRadius: metrics.small,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.white,
  }
});
