import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Modal, TouchableOpacity, ImageBackground, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../../theme';
import AnnualTaxResult from './AnnualTaxResult.js';

class AnnualTax extends Component {
  // console.log(this.props.finalTax(this.props.input))

  calculate = () => {
    this.props.calculateValue(this.props.calculation.input);
    this.props.calculateValueInput2(this.props.calculation.input2);
    // this.props.calculateFinalAnnualTax(this.props.calculation.input, this.props.calculation.input2);
    // console.log(this.props.finalTax(this.props.calculation.input));
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior="padding"
        >
          <ImageBackground source={images.background} style={styles.image}>
          <View style={styles.calculTextContainer}>
            {
              this.props.language === 'en' ?
                <Text style={styles.calculText}>????</Text> :
                <Text style={styles.calculText}>Godišnji porez</Text>
            }
            <Text style={styles.calculText}>na dohodak građana</Text>
          </View>
        </ImageBackground>
          {
            // !this.props.showResult &&
              <View style={styles.scrollViewContainer}>
                  {
                    this.props.language === 'en' ?
                      <TextInput
                        style={styles.inputText}
                        onChangeText={this.props.saveInput}
                        keyboardType="numeric"
                        placeholder="Grosss ???"
                        placeholderTextColor="black"
                      /> :
                      <TextInput
                        style={styles.inputText}
                        onChangeText={this.props.saveInput}
                        keyboardType="numeric"
                        placeholder=" Unesite prosecan mesečni neto prihod od zarade (rsd)"
                        placeholderTextColor="black"
                      />
                  }
                  {
                    this.props.language === 'en' ?
                      <TextInput
                        style={styles.inputText}
                        onChangeText={this.props.saveInputFamily}
                        keyboardType="numeric"
                        placeholder="BFamily"
                        placeholderTextColor="black"
                      /> :
                      <TextInput
                        style={styles.inputText}
                        onChangeText={this.props.saveInputFamily}
                        keyboardType="numeric"
                        placeholder="Unesite broj izdržavanih članova porodice"
                        placeholderTextColor="black"
                      />
                  }
                  {/* <Text>{this.props.calculation.value}</Text> */}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      !this.props.showResult &&
                      this.props.calculation.input !== 0 &&
                      this.props.calculation.input2 !== 0 ?
                        this.calculate() :
                        this.props.language === 'en' ?
                          alert('Please enter your salary and family number.') :
                          alert('Molimo Vas unestite Vasu platu i broj chlanova porodice.');

                    }}>
                    {
                      this.props.language === 'en' ?
                        <Text style={styles.buttonText}>Calaculate</Text> :
                        <Text style={styles.buttonText}>Izračunaj</Text>
                    }
                  </TouchableOpacity>
                  <Text style={styles.description}>{this.props.calculation.description[this.props.language]}</Text>
              </View>
          }
          {/* {
            this.props.showResult ?
              <AnnualTaxResult
                calculation={this.props.calculation}
              />
            : null
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
                this.props.showResult ?
                // this.props.calculation.type === 'grossToNet' ?
                  <AnnualTaxResult
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
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  // saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(AnnualTax);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 2.8,
    justifyContent: 'center',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center'

  },
  calculTextContainer: {
   },
   calculText: {
     color: colors.white,
     fontSize: fonts.size.hugeToExtra,
     alignSelf: 'center'
   },
   scrollViewContainer: {
     flex: 1,
     paddingHorizontal: metrics.large
   },
  inputText: {
    height: 50,
    borderColor: 'rgb(141,141,141)',
    borderWidth: metrics.mediumBorder,
    marginTop: metrics.extraHuge,
    borderRadius: metrics.small,
    fontSize: fonts.size.small,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#14B7C5',
    marginTop: metrics.extraHuge,
    marginBottom: metrics.large,
    padding: metrics.medium,
    borderRadius: metrics.small,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.white,
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
