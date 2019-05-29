import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Modal, TouchableOpacity, ImageBackground, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../../theme';
import LeaseResult from './LeaseResult.js';

class Lease extends Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior="padding"
        >

        <ImageBackground source={images.background} style={styles.image}>

        <View style={styles.calculTextContainer}>
          {
            this.props.language === 'en' ?
              <Text style={styles.calculText}>????</Text> :
              <Text style={styles.calculText}>Zakup fizičkom licu</Text>
          }
          <Text style={styles.calculText}>(RSD)</Text>
        </View>
        </ImageBackground>

        {
          // !this.props.showResult &&
            <View style={styles.scrollViewContainer}>

                {
                  this.props.language === 'en' ?
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder="????"
                      placeholderTextColor="black"
                    /> :
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder=" Unestite neto iznos koji se plaća fizičkom licu (rsd)"
                      placeholderTextColor="black"
                    />
                }

                {/* <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.calculateValue(this.props.calculation.input);
                    // this.props.calculateValueInput2(this.props.calculation.input2);
                    // this.props.calculateFinaLease(this.props.calculation.input, this.props.calculation.input2);
                    // console.log(this.props.finaLease(this.props.calculation.input));
                  }}>
                  {
                    this.props.language === 'en' ?
                      <Text style={styles.buttonText}>Calculate</Text> :
                      <Text style={styles.buttonText}>Izracunaj</Text>
                  }
                </TouchableOpacity> */}

                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>  !this.props.showResult &&
                                  this.props.calculation.input !== 0 ?
                                  this.props.calculateValue(this.props.calculation.input) :
                                    this.props.language === 'en' ?
                                      alert('Please enter your salary') :
                                      alert('Molimo Vas unestite Vasu platu')
                  }
                >
                  {
                    this.props.language === 'en' ?
                      <Text style={styles.buttonText}>Calculate</Text> :
                      <Text style={styles.buttonText}>Izracunaj</Text>
                  }
                </TouchableOpacity>
                {
                  this.props.language === 'en' ?
                    <Text style={styles.description}>{this.props.calculation.description[this.props.language]}</Text> :
                    <Text style={styles.description}>{this.props.calculation.description[this.props.language]}</Text>
                }
            </View>
        }


        {/* {
          this.props.showResult ?
            <LeaseResult
              calculation={this.props.calculation}
            />
          : null
        } */}


        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.calculation.input !== 0 && this.props.showResult}
          onRequestClose={() => false}>
          <View style={{flex: 1}}>

            <TouchableOpacity
              style={styles.closeModalIcon}
              onPress={() => {
                this.props.closeModal();
                // this.setModalVisible(!this.state.modalVisible);
              }}>
              <Ionicons name="ios-close" size={40} color="black" />
            </TouchableOpacity>

            {
              this.props.calculation.input !== 0 &&
              this.props.showResult ?
              // this.props.calculation.type === 'grossToNet' ?
                <LeaseResult
                  calculation={this.props.calculation}
                /> :
                null
            }
          </View>
        </Modal>
      </KeyboardAvoidingView>

    </ScrollView>    );
  }
}

const stateToProps = state => ({
  // taxes: state.calculationsContainer.taxes,
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  // saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Lease);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 2.9,
    justifyContent: 'center',
  },
  calculTextContainer: {
    alignSelf: 'center'
   },
  calculText: {
    color: colors.white,
    fontSize: fonts.size.hugeToExtra,
    alignSelf: 'center'
  },
  scrollViewContainer: {
    paddingHorizontal: metrics.large,
    paddingVertical: metrics.extraHuge,
  },
  inputText: {
    height: 50,
    borderColor: 'rgb(141,141,141)',
    borderWidth: metrics.mediumBorder,
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
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.medium,
    fontFamily: 'openSansBold',
    color: colors.white,
  },
  description: {
    alignSelf: 'center',
    marginTop: metrics.large,
    fontSize: fonts.size.small,
    color: 'rgb(128,128,128)'
  },
  closeModalIcon: {
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 22,
    width: 50,
    height: 50,
    alignSelf: 'flex-end'
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    marginBottom: metrics.huge
  }
});
