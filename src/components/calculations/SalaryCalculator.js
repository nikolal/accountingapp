import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Image, Dimensions } from 'react-native';
import { metrics, colors, fonts, images } from '../../theme';
import SalaryResult from './SalaryResult.js';
import SalaryResultNet from './SalaryResultNet';

const SalaryCalculator = props => {
  return (
    <View style={styles.container}>
      <Image source={images.gross} style={styles.image}/>
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
    alignSelf: 'center',
    marginTop: metrics.large,
    fontSize: fonts.size.small,
    color: 'rgb(128,128,128)'
  }
});
