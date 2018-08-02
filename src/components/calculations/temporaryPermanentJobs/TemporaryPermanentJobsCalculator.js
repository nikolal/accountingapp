import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput, Dimensions,KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import TempPermJobsResult from './TempPermJobsResult.js';


const TemporaryPermanentJobsCalculator = props => {
  return (
    <View style={styles.container}>
      <Image source={images.gross} style={styles.image}/>
      <View style={styles.calculTextContainer}>
        <Text style={styles.calculText}>Obračun Poslova</Text>
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
              placeholder="Unestite BRUTO izons plate na mesecnom nivou"
              placeholderTextColor="black"
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
      }
      {
        props.showResult ?
          <TempPermJobsResult
            calculation={props.calculation}
          />
        : null
      }
    </View>
  );
};


export default TemporaryPermanentJobsCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 2.8,
  },
  calculTextContainer: {
    position: 'absolute',
    top: 90,
    alignSelf: 'center'
   },
  calculText: {
    color: colors.white,
    fontSize: fonts.size.extraHuge,
    alignSelf: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: -61,
  },
  buttons: {
    flex: 1,
    borderColor: 'rgb(151,151,151)',
    borderTopWidth: metrics.tinyBorder,
    borderBottomWidth: metrics.tinyBorder,
    padding: metrics.huge,
    backgroundColor: '#00000050'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.medium,
    fontFamily: 'openSansBold',
    color: colors.white,
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
  description: {
    paddingHorizontal: metrics.large,
    alignSelf: 'center',
    marginTop: metrics.large,
    fontSize: fonts.size.small,
    color: 'rgb(128,128,128)'
  }
});
