import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../theme';

const SalaryCalculator = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttons}><Text style={styles.buttonText}>Gross to Net</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons}><Text style={styles.buttonText}>Net to gross</Text></TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior="padding"
        >
          <Text style={styles.name}>{props.calculation.calculation}</Text>
          <Text style={styles.text}>Unesite bruto iznos plate na mesecnom nivou</Text>
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
  );
};


export default SalaryCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.medium,
    paddingHorizontal: metrics.large
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttons: {
    borderColor: colors.darkGrey,
    borderWidth: metrics.smallBorder,
    padding: metrics.medium,
    backgroundColor: colors.grey
  },
  scrollViewContainer: {
    flex: 1
  },
  name: {
    alignSelf: 'center',
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.lightBlue1,
    marginVertical: metrics.large
  },
  item: {

  },
  text: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    alignSelf: 'center',
    marginTop: metrics.large,
    color: colors.darkGrey
  },
  inputText: {
    height: 40,
    borderColor: colors.darkGrey,
    borderWidth: metrics.smallBorder,
    marginVertical: metrics.large,
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
  valueResul: {
    color: 'red'
  },
  description: {
    alignSelf: 'center',
    marginTop: metrics.large,
    color: colors.grey
  }
});
