import React, { Component } from 'react';
import { Text, View, Modal, TouchableOpacity, ImageBackground, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { metrics, colors, fonts, images } from '../../../theme';
import ContractTaxResult from './ContractTaxResult.js';


const ContractTax = props => {
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inputsContainer}
        behavior="padding"
      >
      <ImageBackground source={images.background} style={styles.image}>
        <View style={styles.calculTextContainer}>
          {
            props.language === 'en' ?
            <Text style={styles.calculText}>Service contract</Text> :
            <Text style={styles.calculText}>Ugovor o delu</Text>

          }
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.switchTax('contractTax', 'tax', 'kada se placa tax')}
          >
            {
              props.language === 'en' ?
                <View>
                  <Text style={styles.buttonGrossNetText}>Tax</Text>
                  <Text style={styles.buttonGrossNetText} />
                </View> :
                <View>
                  <Text style={styles.buttonGrossNetText}>Porez</Text>
                  <Text style={styles.buttonGrossNetText} />
                </View>
            }
            {
              props.calculation.func === 'contractTax' ?
                <View style={styles.trangle} /> : null
            }
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.switchTax('contractPioTax', 'pio tax', 'kada se menja PIO tax')}
          >
            {
              props.language === 'en' ?
                <View>
                  <Text style={styles.buttonGrossNetText}>Tax, </Text>
                  <Text style={styles.buttonGrossNetText}>Pension</Text>
                </View> :
                <View>
                  <Text style={styles.buttonGrossNetText}>Porez i</Text>
                  <Text style={styles.buttonGrossNetText}>PIO</Text>
                </View>
            }
            {
              props.calculation.func === 'contractPioTax' ?
                <View style={styles.trangle} /> : null
            }
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.switchTax('contractPioTaxHealth', 'pio tax health', 'kada se menja PIO tax, health')}
          >
            {
              props.language === 'en' ?
                <View>
                  <Text style={styles.buttonGrossNetText}>Tax, Health</Text>
                  <Text style={styles.buttonGrossNetText}>Pension</Text>
                </View> :
                <View>
                  <Text style={styles.buttonGrossNetText}>Porez, PIO</Text>
                  <Text style={styles.buttonGrossNetText}>Zdravstveno</Text>
                </View>
            }
            {
              props.calculation.func === 'contractPioTaxHealth' ?
                <View style={styles.trangle} /> : null
            }
          </TouchableOpacity>
        </View>

      </ImageBackground>


      {
        // !props.showResult &&
          <View style={styles.scrollViewContainer}>
            {/* <KeyboardAvoidingView
              style={styles.inputsContainer}
              behavior="padding"
            > */}

            {
              props.language === 'en' ?
                <View>
                  <TextInput
                    style={styles.inputText}
                    onChangeText={props.saveInput}
                    keyboardType="numeric"
                    placeholder=" Enter the monthly net value of salary (rsd)"
                    placeholderTextColor="black"
                  />
                  <Text>{props.calculation.value}</Text>
                </View> :
                <View>
                  <TextInput
                    style={styles.inputText}
                    onChangeText={props.saveInput}
                    keyboardType="numeric"
                    placeholder=" Unesite mesečni neto iznos naknade (rsd)"
                    placeholderTextColor="black"
                  />
                  <Text>{props.calculation.value}</Text>
                </View>
            }

              <TouchableOpacity
                style={styles.button}
                onPress={() =>  !props.showResult &&
                                props.calculation.input !== 0 ?
                                props.calculateValue(props.calculation.input) :
                                  props.language === 'en' ?
                                    alert('Please enter your salary') :
                                    alert('Molimo Vas unestite Vasu platu')
                }
              >
                {
                  props.language === 'en' ?
                    <Text style={styles.buttonText}>Calculate</Text> :
                    <Text style={styles.buttonText}>Izračunaj</Text>
                }
              </TouchableOpacity>

              <Text style={styles.description}>
                {props.calculation.description[props.language]}
              </Text>
          </View>
      }
      {/* {
        props.showResult ?
          <ContractTaxResult
            calculation={props.calculation}
          />
        : null
      } */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.calculation.input !== 0 && props.showResult}
        onRequestClose={() => false}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: colors.navigator}}>
            <TouchableOpacity
              style={styles.closeModalIcon}
          />
          </View>

          {
            props.calculation.input !== 0 &&
            props.showResult ?
            // props.calculation.type === 'grossToNet' ?
              <ContractTaxResult
                closeModal={props.closeModal}
                calculation={props.calculation}
              />  :
              null
          }
        </View>
      </Modal>
    </KeyboardAvoidingView>

  </ScrollView>

  );
};

const stateToProps = state => ({
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  // saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(ContractTax);


// export default ContractTax;

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
    marginTop: 60
  },
  buttons: {
    flex: 1,
    borderColor: 'rgb(151,151,151)',
    borderTopWidth: metrics.tinyBorder,
    paddingTop: 10,
    backgroundColor: '#08000060'
  },
   trangle: {
     alignSelf: 'center',
     // marginTop: 16,
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
     // marginBottom: metrics.huge,
     borderRadius: metrics.small,
     fontSize: fonts.size.small,
     textAlign: 'center'
   },
   button: {
     backgroundColor: '#14B7C5',
     marginVertical: metrics.large,
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
