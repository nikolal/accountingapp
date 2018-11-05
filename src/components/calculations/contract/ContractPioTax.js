import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import ContractPioTaxResult from './ContractPioTaxResult.js';


class ContractPioTax extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Image source={images.background} style={styles.image}/>
        <View style={styles.calculTextContainer}>
          <Text style={styles.calculText}>Ugovor o delu</Text>
          <Text style={styles.calculText}>(Porez, PIO - RSD)</Text>
        </View>
        {
          !this.props.showResult &&
            <ScrollView style={styles.scrollViewContainer}>
              <KeyboardAvoidingView
                style={styles.inputsContainer}
                behavior="padding"
              >
                <TextInput
                  style={styles.inputText}
                  onChangeText={this.props.saveInput}
                  keyboardType="numeric"
                  placeholder="Unesite NETO iznos plate"
                  placeholderTextColor="black"
                />
                <Text>{this.props.calculation.value}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.calculateValue(this.props.calculation.input)}>
                  <Text style={styles.buttonText}>Izracunaj</Text>
                </TouchableOpacity>
                <Text style={styles.description}>{this.props.calculation.description}</Text>
              </KeyboardAvoidingView>
            </ScrollView>
        }
        {
          this.props.showResult ?
            <ContractPioTaxResult
              calculation={this.props.calculation}
            />
          : null
        }
      </View>
    );
  }
}

const stateToProps = state => ({
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  // saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(ContractPioTax);

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
