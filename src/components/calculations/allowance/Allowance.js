import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import AllowanceResult from './AllowanceResult.js';
import AllowanceResultAway from './AllowanceResultAway.js';

// Nesto mi gura skrollview nize (za sirinu buttonsContainer) - vidi gde ulazi kad se skroluje
class Allowance extends Component {

  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background} style={styles.image}>
          {
            this.props.calculation.type === 'allowanceHome' ?
              <View style={styles.calculTextContainer}>
              {
                this.props.language === 'en' ?
                <View>
                  <Text style={styles.calculText}>??</Text>
                  <Text style={styles.calculText}>(RSD)</Text>
                </View> :
                <View>
                  <Text style={styles.calculText}>Domaće dnevnica</Text>
                  <Text style={styles.calculText}>(Obračun - RSD)</Text>
                </View>
              }

              </View> :
            this.props.calculation.type === 'allowanceAway' ?
              <View style={styles.calculTextContainer}>
                {
                  this.props.language === 'en' ?
                    <View>
                      <Text style={styles.calculText}>???</Text>
                      <Text style={styles.calculText}>(EUR)</Text>
                    </View> :
                    <View>
                      <Text style={styles.calculText}>Dnevnice u inostranstvu</Text>
                      <Text style={styles.calculText}>(Obračun - EUR)</Text>
                    </View>
                }
              </View> : null
          }
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.switchingAllowanceHomeAway('allowanceHome')}
            >
              {
                this.props.language === 'en' ?
                  <Text style={styles.buttonText}>home :)</Text> :
                  <Text style={styles.buttonText}>Domace</Text>
              }
              {
                this.props.calculation.type === 'allowanceHome' ?
                  <View style={styles.trangle} /> : null
              }
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.switchingAllowanceAwayHome('allowanceAway')}
            >
              {
                this.props.language === 'en' ?
                  <Text style={styles.buttonText}>kkjh</Text> :
                  <Text style={styles.buttonText}>U inostranstvu</Text>
              }
              {
                this.props.calculation.type === 'allowanceAway' ?
                  <View style={styles.trangle} /> : null
              }
            </TouchableOpacity>
          </View>
        </ImageBackground>
          {
            !this.props.showResult &&
              <ScrollView style={styles.scrollViewContainer}>
                <KeyboardAvoidingView
                  style={styles.inputsContainer}
                  behavior="padding"
                >
                {
                  this.props.calculation.type === 'allowanceHome' ?
                  <TextInput
                    style={styles.inputText}
                    onChangeText={this.props.saveInput}
                    keyboardType="numeric"
                    placeholder="Unesite NETO dnevnice u RSD"
                    placeholderTextColor="black"
                  /> :
                  this.props.calculation.type === 'allowanceAway' ?
                  <TextInput
                    style={styles.inputText}
                    onChangeText={this.props.saveInput}
                    keyboardType="numeric"
                    placeholder="Unesite NETO dnevnice u EUR"
                    placeholderTextColor="black"
                  /> : null
                }
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
            this.props.showResult && this.props.calculation.type === 'allowanceHome' ?
              <AllowanceResult
                calculation={this.props.calculation}
              /> :
              this.props.showResult && this.props.calculation.type === 'allowanceAway' ?
            <AllowanceResultAway
              calculation={this.props.calculation}
            /> : null
          }
      </View>
    );
  }
}

const stateToProps = state => ({
  // taxes: state.calculationsContainer.taxes,
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  // saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Allowance);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 2.9,
    justifyContent: 'flex-end'
  },
  calculTextContainer: {
    alignItems: 'center',
   },
  calculText: {
    color: colors.white,
    fontSize: fonts.size.hugeToExtra,
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
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.small,
    fontFamily: 'openSansBold',
    color: colors.white,
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
  scrollViewContainer: {
    paddingHorizontal: metrics.large,
    paddingVertical: metrics.extraHuge,
  },
  inputText: {
    height: 50,
    borderColor: 'rgb(141,141,141)',
    borderWidth: metrics.smallBorder,
    marginBottom: metrics.huge,
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
