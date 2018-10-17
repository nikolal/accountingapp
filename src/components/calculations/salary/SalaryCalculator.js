
import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Image, Dimensions } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import SalaryResult from './SalaryResult.js';
import SalaryResultNet from './SalaryResultNet';

const SalaryCalculator = props => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inputsContainer}
        behavior="position"
      >
      <ImageBackground source={images.background} style={styles.image}>
        {
          props.calculation.type === 'grossToNet' ?
            <View style={styles.calculTextContainer}>
              <Text style={styles.calculText}>Obračun Bruto zarada</Text>
              <Text style={styles.calculText}>(RSD)</Text>
            </View> :
          props.calculation.type === 'netToGross' ?
            <View style={styles.calculTextContainer}>
              <Text style={styles.calculText}>Obračun Neto zarada</Text>
              <Text style={styles.calculText}>(RSD)</Text>
            </View> : null
        }
        {
          !props.showResult &&
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => props.switchingGrossToNet('grossToNet')}
              >
                <Text style={styles.buttonGrossNetText}>Gross to Net</Text>
                {
                  props.calculation.type === 'grossToNet' ?
                    <View style={styles.trangle} /> : null
                }
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => props.switchNetToGross('netToGross')}
              >
                <Text style={styles.buttonGrossNetText}>Net to gross</Text>
                {
                  props.calculation.type === 'netToGross' ?
                    <View style={styles.trangle} /> : null
                }
              </TouchableOpacity>
            </View>
          }
      </ImageBackground>
      {
        !props.showResult &&
        <ScrollView style={styles.scrollViewContainer}>
          {
            props.calculation.type === 'grossToNet' ?
              <View>
                <TextInput
                  style={styles.inputText}
                  onChangeText={props.saveInput}
                  placeholder="Unestite BRUTO izons plate na mesecnom nivou"
                  placeholderTextColor="black"
                  keyboardType="numeric"
                />
              </View> :
            props.calculation.type === 'netToGross' ?
              <View>
                <TextInput
                  style={styles.inputText}
                  onChangeText={props.saveInput}
                  placeholder="Unestite NETO izons plate na mesecnom nivou"
                  placeholderTextColor="black"
                  keyboardType="numeric"
                />
              </View> : null
            }
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.calculateValue(props.calculation.input)}>
              <Text style={styles.buttonText}>Izracunaj</Text>
            </TouchableOpacity>
            <Text style={styles.description}>{props.calculation.description}</Text>
        </ScrollView>
      }
      {
        props.showResult &&
        props.calculation.type === 'grossToNet' ?
          <SalaryResult
            calculation={props.calculation}
          /> :
        props.showResult &&
        props.calculation.type === 'netToGross' ?
          <SalaryResultNet
            calculation={props.calculation}
          /> :
          null
      }
    </KeyboardAvoidingView>
    </View>
  );
};


export default SalaryCalculator;

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
    borderWidth: metrics.smallBorder,
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
  }
});
