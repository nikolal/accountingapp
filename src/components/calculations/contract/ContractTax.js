import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { metrics, colors, fonts, images } from '../../../theme';
import ContractTaxResult from './ContractTaxResult.js';


const ContractTax = props => {
  return (
    <View style={styles.container}>
      <Image source={images.background} style={styles.image}/>
      <View style={styles.calculTextContainer}>
        <Text style={styles.calculText}>Ugovor o delu</Text>
        <Text style={styles.calculText}>(Porez - RSD)</Text>
      </View>





      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.switchTax('contractTax', 'tax', 'kada se placa tax')}
        >
          {
            props.language === 'en' ?
            <Text style={styles.buttonGrossNetText}>Tax</Text> :
            <Text style={styles.buttonGrossNetText}>Tax</Text>
          }
          {
            props.calculation.func === 'contractTax' ?
              <View style={styles.trangle} /> : null
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.switchTax('contractPioTax', 'pio tax', 'kada se menja PIO tax')}
        >
          {
            props.language === 'en' ?
              <Text style={styles.buttonGrossNetText}>Tax Pio</Text> :
              <Text style={styles.buttonGrossNetText}>Tax Pio</Text>
          }
          {
            props.calculation.func === 'contractPioTax' ?
              <View style={styles.trangle} /> : null
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.switchTax('contractPioTaxHealth', 'pio tax health', 'kada se menja PIO tax, health')}
        >
          {
            props.language === 'en' ?
              <Text style={styles.buttonGrossNetText}>Tax Pio Health</Text> :
              <Text style={styles.buttonGrossNetText}>Tax pio health</Text>
          }
          {
            props.calculation.func === 'contractPioTaxHealth' ?
              <View style={styles.trangle} /> : null
          }
        </TouchableOpacity>
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
                placeholder="Unesite NETO iznos plate"
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
          <ContractTaxResult
            calculation={props.calculation}
          />
        : null
      }

    </View>
  );
};

const stateToProps = state => ({
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  // saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(ContractTax);


// export default ContractTax;

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
