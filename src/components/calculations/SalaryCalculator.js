import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../theme';
import SalaryResult from './SalaryResult.js';
import SalaryResultNet from './SalaryResultNet';

const SalaryCalculator = props => {
  return (
    <View style={styles.container}>
      {
        !props.showResult &&
          <View style={{flex: 1}}>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => props.switchingGrossToNet('grossToNet')}
              >
                <Text style={styles.buttonText}>Gross to Net</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => props.switchNetToGross('netToGross')}
              >
                <Text style={styles.buttonText}>Net to gross</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollViewContainer}>
              <KeyboardAvoidingView
                style={styles.inputsContainer}
                behavior="padding"
              >
                {
                  props.calculation.type === 'grossToNet' ?
                    <View>
                      <Text style={styles.name}>OBRACUN BRUTO ZARADA - RSD</Text>
                      <Text style={styles.text}>Unesite BRUTO iznos plate na mesecnom nivou</Text>
                    </View> :
                  props.calculation.type === 'netToGross' ?
                    <View>
                      <Text style={styles.name}>OBRACUN NETO ZARADA - RSD</Text>
                      <Text style={styles.text}>Unesite NETO iznos plate na mesecnom nivou</Text>
                    </View> :
                  null
                }
                <TextInput
                  style={styles.inputText}
                  onChangeText={props.saveInput}
                  keyboardType="numeric"
                />
                <Text>{props.calculation.value}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => props.calculateValue(props.calculation.input)}>
                  <Text style={styles.buttonText}>Izracunaj</Text>
                </TouchableOpacity>
                <Text style={styles.description}>{props.calculation.description}</Text>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
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

    </View>
  );
};


export default SalaryCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: metrics.medium,
    // paddingHorizontal: metrics.large
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  // buttonsActive: {
  //   borderColor: colors.darkGrey,
  //   borderWidth: metrics.smallBorder,
  //   padding: metrics.medium,
  //   backgroundColor: colors.grey
  // },
  // buttonTextActive: {
  //   alignSelf: 'center',
  //   fontSize: fonts.size.large,
  //   fontFamily: 'openSansBold',
  //   // color: colors.red,
  // },
  buttons: {
    flex: 1,
    borderColor: colors.grey,
    borderWidth: metrics.smallBorder,
    padding: metrics.large,
    backgroundColor: colors.lightBlue2
  },
  scrollViewContainer: {
    flex: 1,
    paddingHorizontal: metrics.large
  },
  name: {
    fontFamily: 'openSansBold',
    fontSize: fonts.size.huge,
    alignSelf: 'center',
    color: colors.grey,
    marginVertical: metrics.huge
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    marginVertical: metrics.medium,
    color: colors.lightBlue1
  },
  inputText: {
    height: 40,
    borderColor: colors.darkGrey,
    borderWidth: metrics.smallBorder,
    marginVertical: metrics.huge,
    borderRadius: metrics.small
  },
  button: {
    backgroundColor: colors.lightBlue2,
    marginBottom: metrics.large,
    padding: metrics.medium,
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.white,
  },
  // valueResul: {
  //   color: 'red'
  // },
  description: {
    alignSelf: 'center',
    marginTop: metrics.large,
    color: colors.grey
  }
});
