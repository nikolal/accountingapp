import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput, Dimensions,KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import TempPermJobsResult from './TempPermJobsResult.js';


class TemporaryPermanentJobsCalculator extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={images.background} style={styles.image}/>
        {
          this.props.language === 'en' ?
            <View style={styles.calculTextContainer}>
              <Text style={styles.calculText}>?????</Text>
              <Text style={styles.calculText}>(RSD)</Text>
            </View> :
            <View style={styles.calculTextContainer}>
              <Text style={styles.calculText}>Privremeni i povremeni poslovi</Text>
              <Text style={styles.calculText}>(RSD)</Text>
            </View>
        }
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
                      placeholder="????????"
                      placeholderTextColor="black"
                    /> :
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder="Uneti neto izons zarade (rsd)"
                      placeholderTextColor="black"
                    />
                }

                <Text>{this.props.calculation.value}</Text>
                {
                  this.props.language === 'en' ?
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.calculateValue(this.props.calculation.input)}>
                    <Text style={styles.buttonText}>Calculate</Text>
                  </TouchableOpacity> :
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.calculateValue(this.props.calculation.input)}>
                    <Text style={styles.buttonText}>Izracunaj</Text>
                  </TouchableOpacity>
                }
                <Text style={styles.description}>{this.props.calculation.description[this.props.language]}</Text>
              </KeyboardAvoidingView>
            </ScrollView>
        }
        {
          this.props.showResult ?
            <TempPermJobsResult
              calculation={this.props.calculation}
            />
          : null
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

export default connect(stateToProps, dispatchToProps)(TemporaryPermanentJobsCalculator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  calculTextContainer: {
    position: 'absolute',
    top: 90,
    alignSelf: 'center'
   },
  calculText: {
    color: colors.white,
    fontSize: fonts.size.hugeToExtra,
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
    marginTop: metrics.extraHuge,
    marginBottom: metrics.small,
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
