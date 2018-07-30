import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import AllowanceResult from './AllowanceResult.js';
import AllowanceResultAway from './AllowanceResultAway.js';

// Nesto mi gura skrollview nize (za sirinu buttonsContainer) - vidi gde ulazi kad se skroluje
const Allowance = props => {

  return (
    <View style={styles.container}>
      <Image source={images.gross} style={styles.image}/>
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
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.switchingAllowanceAwayHome('allowanceAway')}
          >
            <Text style={styles.buttonText}>U inostranstvu</Text>
          </TouchableOpacity>
        </View>
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
          {
            props.showResult ?
              props.calculation.type === 'allowanceHome' ?
              <AllowanceResult
                calculation={props.calculation}
              />
            :
            <AllowanceResultAway
              calculation={props.calculation}
            />
            :
            <Text style={styles.description}>{props.calculation.description}</Text>
          }
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};


export default Allowance;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: Dimensions.get('window').height / 2.8,
  },
  calculTextContainer: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center'
   },
  calculText: {
    color: colors.white,
    fontSize: fonts.size.extraHuge,
    alignSelf: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    top: -64,
  },
  buttons: {
    flex: 1,
    borderColor: 'rgb(151,151,151)',
    borderTopWidth: metrics.tinyBorder,
    borderBottomWidth: metrics.tinyBorder,
    padding: metrics.huge,
    backgroundColor: '#00000050'
  },
  scrollViewContainer: {
    paddingHorizontal: metrics.large
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
  }
});
