import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import AnnualTaxResult from './AnnualTaxResult.js';

class AnnualTax extends Component {
  // console.log(this.props.finalTax(this.props.input))
  render() {
    return (
      <View style={styles.container}>
        <Image source={images.background} style={styles.image}/>
        <View style={styles.calculTextContainer}>
          {
            this.props.language === 'en' ?
              <Text style={styles.calculText}>Godišnji porez</Text> :
              <Text style={styles.calculText}>Godišnji porez</Text>
          }
          <Text style={styles.calculText}>(RSD)</Text>
        </View>
        {
          !this.props.showResult &&
            <ScrollView style={styles.scrollViewContainer}>
              <KeyboardAvoidingView
                style={styles.inputsContainer}
                behavior="padding"
              >
                {
                  this.props.language === 'en' ?
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder="Grosss ???"
                      placeholderTextColor="black"
                    /> :
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder="Unesite ukupnu bruto mesecnu zaradu"
                      placeholderTextColor="black"
                    />
                }
                {
                  this.props.language === 'en' ?
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInputFamily}
                      keyboardType="numeric"
                      placeholder="BFamily"
                      placeholderTextColor="black"
                    /> :
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInputFamily}
                      keyboardType="numeric"
                      placeholder="Broj izdržavanih članova porodice"
                      placeholderTextColor="black"
                    />
                }
                <Text>{this.props.calculation.value}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.calculateValue(this.props.calculation.input);
                    this.props.calculateValueInput2(this.props.calculation.input2);
                    this.props.calculateFinalAnnualTax(this.props.calculation.input, this.props.calculation.input2);
                    console.log(this.props.finalTax(this.props.calculation.input));
                  }}>
                  {
                    this.props.language === 'en' ?
                      <Text style={styles.buttonText}>Calaculate</Text> :
                      <Text style={styles.buttonText}>Izracunaj</Text>
                  }
                </TouchableOpacity>
                <Text style={styles.description}>{this.props.calculation.description[this.props.language]}</Text>
              </KeyboardAvoidingView>
            </ScrollView>
        }
        {
          this.props.showResult ?
            <AnnualTaxResult
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

export default connect(stateToProps, dispatchToProps)(AnnualTax);


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
