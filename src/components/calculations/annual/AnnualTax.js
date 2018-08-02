import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import AnnualTaxResult from './AnnualTaxResult.js';

const AnnualTax = props => {
  // console.log(props.finalTax(props.input))
  return (
    <View style={styles.container}>
      <Image source={images.gross} style={styles.image}/>
      <View style={styles.calculTextContainer}>
        <Text style={styles.calculText}>Godišnji porez</Text>
        <Text style={styles.calculText}>(RSD)</Text>
      </View>
      {
        !props.showResult &&
          <ScrollView style={styles.scrollViewContainer}>
            <KeyboardAvoidingView
              style={styles.inputsContainer}
              behavior="padding"
            >
              <TextInput
                style={styles.inputText}
                onChangeText={props.saveInput}
                keyboardType="numeric"
                placeholder="Unesite ukupnu mesecnu zaradu"
                placeholderTextColor="black"
              />
              <TextInput
                style={styles.inputText}
                onChangeText={props.saveInputFamily}
                keyboardType="numeric"
                placeholder="Broj clanova porodice"
                placeholderTextColor="black"
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
              <Text style={styles.description}>{props.calculation.description}</Text>
            </KeyboardAvoidingView>
          </ScrollView>
      }
      {
        props.showResult ?
          <AnnualTaxResult
            calculation={props.calculation}
          />
        : null
      }

    </View>
  );
};


export default AnnualTax;

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
  }
});
