
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Modal, TouchableOpacity, ImageBackground, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../../theme';
import SalaryResult from './SalaryResult.js';
import SalaryResultNet from './SalaryResultNet';

class SalaryCalculator extends Component {

  /* render function, etc */

  render(){
    console.log(this.props.calculated);
    console.log(this.props.calculation.input !== 0);
    return (

      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior="padding"
        >
          <ImageBackground source={images.background} style={styles.image}>
            {
              this.props.calculation.type === 'grossToNet' ?
                <View style={styles.calculTextContainer}>
                  {
                    this.props.language === 'en' ?
                      <Text style={styles.calculText}>????</Text> :
                      <Text style={styles.calculText}>Obračun Bruto zarada</Text>
                  }
                  <Text style={styles.calculText}>(RSD)</Text>
                </View> :
              this.props.calculation.type === 'netToGross' ?
                <View style={styles.calculTextContainer}>
                  {
                    this.props.language === 'en' ?
                      <Text style={styles.calculText}>??????</Text> :
                      <Text style={styles.calculText}>Obračun Neto zarada</Text>
                  }
                  <Text style={styles.calculText}>(RSD)</Text>
                </View> : null
            }
            {
              // !this.props.showResult &&
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => this.props.switchingGrossToNet('grossToNet')}
                  >
                    {
                      this.props.language === 'en' ?
                      <Text style={styles.buttonGrossNetText}>Gross to Net</Text> :
                      <Text style={styles.buttonGrossNetText}>Bruto u neto</Text>
                    }
                    {
                      this.props.calculation.type === 'grossToNet' ?
                        <View style={styles.trangle} /> : null
                    }
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => this.props.switchNetToGross('netToGross')}
                  >
                    {
                      this.props.language === 'en' ?
                        <Text style={styles.buttonGrossNetText}>Net to gross</Text> :
                        <Text style={styles.buttonGrossNetText}>Neto u bruto</Text>
                    }
                    {
                      this.props.calculation.type === 'netToGross' ?
                        <View style={styles.trangle} /> : null
                    }
                  </TouchableOpacity>
                </View>
              }
          </ImageBackground>
          {
            // !this.props.showResult &&
            <View style={styles.scrollViewContainer}>
              {/* <KeyboardAvoidingView
                style={styles.inputsContainer}
                behavior="padding"
              > */}
              {
                this.props.calculation.type === 'grossToNet' ?
                  <View>
                    {
                      this.props.language === 'en' ?
                        <TextInput
                          style={styles.inputText}
                          onChangeText={this.props.saveInput}
                          placeholder="?????"
                          placeholderTextColor="black"
                          keyboardType="numeric"
                        /> :
                        <TextInput
                          style={styles.inputText}
                          onChangeText={this.props.saveInput}
                          placeholder="Unestite BRUTO izons plate na mesecnom nivou"
                          placeholderTextColor="black"
                          keyboardType="numeric"
                        />
                    }
                  </View> :
                this.props.calculation.type === 'netToGross' ?
                  <View>
                    {
                      this.props.language === 'en' ?
                        <TextInput
                          style={styles.inputText}
                          onChangeText={this.props.saveInput}
                          placeholder="Net"
                          placeholderTextColor="black"
                          keyboardType="numeric"
                        /> :
                        <TextInput
                          style={styles.inputText}
                          onChangeText={this.props.saveInput}
                          placeholder="Unestite NETO izons plate na mesecnom nivou"
                          placeholderTextColor="black"
                          keyboardType="numeric"
                        />
                    }

                  </View> : null
                }
                {/* {
                  this.props.showResult &&
                  this.props.calculation.input === 0 &&
                    <Text style={styles.errorText}>Please enter text </Text>
                } */}
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
                      <Text style={styles.buttonText}>Izracunaj</Text>
                  }
                </TouchableOpacity>
                <Text style={styles.description}>{this.props.calculation.description[this.props.language]}</Text>
              {/* </KeyboardAvoidingView> */}
            </View>
          }
          {/* {
            this.props.showResult &&
            this.props.calculation.type === 'grossToNet' ?
              <SalaryResult
                calculation={this.props.calculation}
              /> :
            this.props.showResult &&
            this.props.calculation.type === 'netToGross' ?
              <SalaryResultNet
                calculation={this.props.calculation}
              /> :
              null
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
                this.props.calculation.type === 'grossToNet' ?
                  <SalaryResult
                    calculation={this.props.calculation}
                  /> :
                this.props.showResult &&
                this.props.calculation.input !== 0 &&
                this.props.calculation.type === 'netToGross' ?
                  <SalaryResultNet
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

export default connect(stateToProps, dispatchToProps)(SalaryCalculator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 2.9,
    justifyContent: 'flex-end',
  },
  calculTextContainer: {
    alignSelf: 'center'
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
  buttonGrossNetText: {
    alignSelf: 'center',
    fontSize: fonts.size.small,
    fontFamily: 'openSansBold',
    color: colors.white,
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
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.medium,
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
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    width: 50,
    height: 50,
    alignSelf: 'flex-end'
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    marginBottom: metrics.huge
  }
});
