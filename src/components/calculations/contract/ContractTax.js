import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Image, Dimensions } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import ContractTaxResult from './ContractTaxResult.js';


const ContractTax = props => {
  return (
    <View style={styles.container}>
      <Image source={images.gross} style={styles.image}/>
      <View style={styles.calculTextContainer}>
        <Text style={styles.calculText}>Ugovor o delu</Text>
        <Text style={styles.calculText}>(Porez - RSD)</Text>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior="padding"
        >
          <TextInput
            style={styles.inputText}
            onChangeText={props.saveInput}
            keyboardType="numeric"
            placeholder="Unesite NETO iznos plate"
            placeholderTextColor="black"
          />
          <Text>{props.calculation.value}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.calculateValue(props.calculation.input)}>
            <Text style={styles.buttonText}>Izracunaj</Text>
          </TouchableOpacity>
          {
            props.showResult ?
              <ContractTaxResult
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


export default ContractTax;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
   scrollViewContainer: {
     flex: 1,
     paddingHorizontal: metrics.large
   },
  inputText: {
    height: 50,
    borderColor: 'rgb(141,141,141)',
    borderWidth: metrics.smallBorder,
    marginVertical: metrics.extraHuge,
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
