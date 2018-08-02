import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import AllowanceResult from './AllowanceResult.js';
import AllowanceResultAway from './AllowanceResultAway.js';

// Nesto mi gura skrollview nize (za sirinu buttonsContainer) - vidi gde ulazi kad se skroluje
const Allowance = props => {

  return (
    <View style={styles.container}>
      <ImageBackground source={images.gross} style={styles.image}>
        {
          props.calculation.type === 'allowanceHome' ?
            <View style={styles.calculTextContainer}>
              <Text style={styles.calculText}>Domaće dnevnica</Text>
              <Text style={styles.calculText}>(Obračun - RSD)</Text>
            </View> :
          props.calculation.type === 'allowanceAway' ?
            <View style={styles.calculTextContainer}>
              <Text style={styles.calculText}>Dnevnice u inostranstvu</Text>
              <Text style={styles.calculText}>(Obračun - EUR)</Text>
            </View> : null
        }
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.switchingAllowanceHomeAway('allowanceHome')}
          >
            <Text style={styles.buttonText}>Domace</Text>
            {
              props.calculation.type === 'allowanceHome' ?
                <View style={styles.trangle}></View> : null
            }
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.switchingAllowanceAwayHome('allowanceAway')}
          >
            <Text style={styles.buttonText}>U inostranstvu</Text>
            {
              props.calculation.type === 'allowanceAway' ?
                <View style={styles.trangle}></View> : null
            }
          </TouchableOpacity>
        </View>
      </ImageBackground>
        {
          !props.showResult &&
            <ScrollView style={styles.scrollViewContainer}>
              <KeyboardAvoidingView
                style={styles.inputsContainer}
                behavior="padding"
              >
              {
                props.calculation.type === 'allowanceHome' ?
                <TextInput
                  style={styles.inputText}
                  onChangeText={props.saveInput}
                  keyboardType="numeric"
                  placeholder="Unesite NETO dnevnice u RSD"
                  placeholderTextColor="black"
                /> :
                props.calculation.type === 'allowanceAway' ?
                <TextInput
                  style={styles.inputText}
                  onChangeText={props.saveInput}
                  keyboardType="numeric"
                  placeholder="Unesite NETO dnevnice u EUR"
                  placeholderTextColor="black"
                /> : null
              }
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.calculateValue(props.calculation.input)}>
                <Text style={styles.buttonText}>Izracunaj</Text>
              </TouchableOpacity>
              <Text style={styles.description}>{props.calculation.description}</Text>
            </KeyboardAvoidingView>
          </ScrollView>
        }
        {
          props.showResult && props.calculation.type === 'allowanceHome' ?
            <AllowanceResult
              calculation={props.calculation}
            /> :
            props.showResult && props.calculation.type === 'allowanceAway' ?
          <AllowanceResultAway
            calculation={props.calculation}
          /> : null
        }
    </View>
  );
};


export default Allowance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 2.8,
    justifyContent: 'flex-end'
  },
  calculTextContainer: {
    alignItems: 'center',
   },
  calculText: {
    color: colors.white,
    fontSize: fonts.size.extraHuge,
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
    borderBottomWidth: metrics.tinyBorder,
    paddingTop: 15,
    // backgroundColor: 'yellow'
    backgroundColor: '#08000099'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.small,
    fontFamily: 'openSansBold',
    color: colors.white,
  },
  trangle: {
    alignSelf: 'center',
    marginTop: 9,
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
    // flex: 1
  },
  inputText: {
    height: 50,
    borderColor: 'rgb(141,141,141)',
    borderWidth: metrics.smallBorder,
    marginBottom: metrics.extraHuge,
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
  }
});
