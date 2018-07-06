import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../theme';
import AnnualTaxResult from './AnnualTaxResult.js';

const AnnualTax = props => {
  // console.log(props.finalTax(props.input))
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior="padding"
        >
          <Text style={styles.name}>Godisnji porez</Text>
          <Text style={styles.text}>Unesite ukupnu mesecnu zaradu</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={props.saveInput}
            keyboardType="numeric"
          />
          <Text style={styles.text}>Broj clanova porodice</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={props.saveInputFamily}
            keyboardType="numeric"
          />
          <Text>{props.calculation.value}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.calculateValue(props.calculation.input);
              props.calculateValueInput2(props.calculation.input2);
              props.calculateFinalAnnualTax(props.calculation.input, props.calculation.input2);
              console.log(props.finalTax(props.calculation.input));
            }}>
            <Text style={styles.buttonText}>Izracunaj</Text>
          </TouchableOpacity>
          {
            props.showResult ?
              <AnnualTaxResult
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


export default AnnualTax;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.medium,
  },
  name: {
    fontFamily: 'openSansBold',
    fontSize: fonts.size.huge,
    alignSelf: 'center',
    color: colors.lightBlue1,
    marginVertical: metrics.huge
  },
  text: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    alignSelf: 'center',
    color: colors.grey
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
  description: {
    alignSelf: 'center',
    marginTop: metrics.large,
    color: colors.grey
  }
});
