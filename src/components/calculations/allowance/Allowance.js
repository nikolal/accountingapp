import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Modal, TouchableOpacity, ImageBackground, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../../theme';
import AllowanceResult from './AllowanceResult.js';
import AllowanceResultAway from './AllowanceResultAway.js';

// Nesto mi gura skrollview nize (za sirinu buttonsContainer) - vidi gde ulazi kad se skroluje
class Allowance extends Component {

  render(){
    console.log(this.props.calculation);
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior="padding"
        >
        <ImageBackground source={images.background} style={styles.image}>
          {
            this.props.calculation.type === 'allowanceHome' ?
              <View style={styles.calculTextContainer}>
                {
                  this.props.language === 'en' ?
                    <View>
                      <Text style={styles.calculText}>Daily allowances</Text>
                      <Text style={styles.calculText}>in the  country</Text>
                    </View> :
                    <Text style={styles.calculText}>Dnevnice u zemlji</Text>
                }
              </View> :
            this.props.calculation.type === 'allowanceAway' ?
              <View style={styles.calculTextContainer}>
                {
                  this.props.language === 'en' ?
                    <View>
                      <Text style={styles.calculText}>Daily allowances</Text>
                      <Text style={styles.calculText}>on abroad</Text>
                    </View> :
                      <Text style={styles.calculText}>Dnevnice u inostranstvu</Text>
                }
              </View> : null
          }
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.switchingAllowanceHomeAway('allowanceHome')}
            >
              {
                this.props.language === 'en' ?
                  <Text style={styles.buttonText}>In the country</Text> :
                  <Text style={styles.buttonText}>U zemlji</Text>
              }
              {
                this.props.calculation.type === 'allowanceHome' ?
                  <View style={styles.trangle} /> : null
              }
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.switchingAllowanceAwayHome('allowanceAway')}
            >
              {
                this.props.language === 'en' ?
                  <Text style={styles.buttonText}>On abroad</Text> :
                  <Text style={styles.buttonText}>U inostranstvu</Text>
              }
              {
                this.props.calculation.type === 'allowanceAway' ?
                  <View style={styles.trangle} /> : null
              }
            </TouchableOpacity>
          </View>


        </ImageBackground>
          {
            // !this.props.showResult &&
              <View style={styles.scrollViewContainer}>
                {/* <KeyboardAvoidingView
                  style={styles.inputsContainer}
                  behavior="padding"
                > */}
                {
                  this.props.calculation.type === 'allowanceHome' && this.props.language === 'en' ?
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder="Enter the net value of daily allowance in the country (rsd)"
                      placeholderTextColor="black"
                    /> :
                    this.props.calculation.type === 'allowanceHome' && this.props.language === 'rs' ?
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder="Unesite neto iznos dnevnice u zemlji (rsd)"
                      placeholderTextColor="black"
                    /> :
                    this.props.calculation.type === 'allowanceAway' && this.props.language === 'en' ?
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder=" Enter the net value of daily allowance on abroad (eur)"
                      placeholderTextColor="black"
                    /> :
                    this.props.calculation.type === 'allowanceAway' && this.props.language === 'rs' ?
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder="Unesite neto iznos dnevnice u inostranstvu (eur)"
                      placeholderTextColor="black"
                  /> : null
                }

                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>  !this.props.showResult &&
                                  this.props.calculation.input !== 0 ?
                                  this.props.calculateValue(this.props.calculation.input) :
                                    this.props.language === 'en' ?
                                      alert('Please enter your salary') :
                                      alert('Molimo Vas unestite Vasu platu')
                  }
                >
                  {
                    this.props.language === 'en' ?
                      <Text style={styles.buttonText}>Calculate</Text> :
                      <Text style={styles.buttonText}>Izračunaj</Text>
                  }
                </TouchableOpacity>

                <Text style={styles.description}>
                  {this.props.calculation.description[this.props.language]}
                </Text>

            </View>
          }



          {/* {
            this.props.showResult && this.props.calculation.type === 'allowanceHome' ?
              <AllowanceResult
                calculation={this.props.calculation}
              /> :
              this.props.showResult && this.props.calculation.type === 'allowanceAway' ?
            <AllowanceResultAway
              calculation={this.props.calculation}
            /> : null
          } */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.calculation.input !== 0 && this.props.showResult}
            onRequestClose={() => false}>
            <View style={{flex: 1}}>
              <View style={{backgroundColor: colors.navigator}}>
                <TouchableOpacity
                  style={styles.closeModalIcon}
                  onPress={() => {
                    this.props.closeModal();
                    // this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Ionicons name="ios-close" size={40} color={colors.drawerBlue} />
                </TouchableOpacity>
              </View>

              {
                this.props.calculation.input !== 0 &&
                this.props.showResult &&
                this.props.calculation.type === 'allowanceHome' ?
                  <AllowanceResult
                    calculation={this.props.calculation}
                  /> :
                this.props.showResult &&
                this.props.calculation.input !== 0 &&
                this.props.calculation.type === 'allowanceAway' ?
                  <AllowanceResultAway
                    calculation={this.props.calculation}
                  /> :
                  null
              }
            </View>
          </Modal>
        </KeyboardAvoidingView>

      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  // taxes: state.calculationsContainer.taxes,
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  // saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Allowance);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 2.9,
    justifyContent: 'flex-end'
  },
  calculTextContainer: {
    alignItems: 'center',
   },
   calculText: {
     color: colors.white,
     fontSize: fonts.size.hugeToExtra,
     alignSelf: 'center'
   },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 50
  },
  buttons: {
    flex: 1,
    borderColor: 'rgb(151,151,151)',
    borderTopWidth: metrics.tinyBorder,
    paddingTop: 22,
    backgroundColor: '#08000060'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.small,
    fontFamily: 'openSansBold',
    color: colors.white,
  },
  trangle: {
    alignSelf: 'center',
    marginTop: 16,
    width: 0,
    height: 0,
    borderWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: colors.white,
  },
  scrollViewContainer: {
    paddingHorizontal: metrics.large,
    paddingVertical: metrics.extraHuge,
  },
  inputText: {
    height: 50,
    borderColor: 'rgb(141,141,141)',
    borderWidth: metrics.mediumBorder,
    marginBottom: metrics.huge,
    borderRadius: metrics.small,
    fontSize: fonts.size.small,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#14B7C5',
    marginBottom: metrics.large,
    padding: metrics.medium,
    borderRadius: metrics.small,
  },
  description: {
    alignSelf: 'center',
    marginTop: metrics.large,
    fontSize: fonts.size.small,
    color: 'rgb(128,128,128)'
  },
  closeModalIcon: {
    paddingTop: 13,
    margin: 15,
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    marginBottom: metrics.huge
  }
});
