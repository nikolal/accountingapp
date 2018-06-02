import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../theme';
import AllowanceResult from './AllowanceResult.js';
import AllowanceResultAway from './AllowanceResultAway.js';


const Allowance = props => {

  return (
    <View style={styles.container}>
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
          <Text style={styles.name}>Dnevnice</Text>
          {
            props.calculation.type === 'allowanceHome' ?
              <Text style={styles.text}>Unesite NETO dnevnice u RSD</Text>
            :
              <Text style={styles.text}>Unesite NETO dnevnice u EUR</Text>
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
    flex: 1,
    margin: metrics.medium,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttons: {
    flex: 1,
    borderColor: colors.grey,
    borderWidth: metrics.smallBorder,
    padding: metrics.large,
    backgroundColor: colors.lightBlue2
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
