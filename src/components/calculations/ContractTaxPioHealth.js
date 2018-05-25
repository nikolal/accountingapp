import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../theme';
import ContractPioTaxHealthResult from './ContractPioTaxHealthResult.js';


const ContractPioTaxHealth = props => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior="padding"
        >
          <Text style={styles.name}>Ugovor o delu - PIO, porez, i zdravstveno</Text>
          <Text style={styles.text}>Unesite NETO iznos plate</Text>
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
          {
            props.showResult ?
              <ContractPioTaxHealthResult
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


export default ContractPioTaxHealth;

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
