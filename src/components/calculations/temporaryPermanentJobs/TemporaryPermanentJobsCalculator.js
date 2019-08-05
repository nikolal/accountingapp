import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, ImageBackground, Modal, TouchableOpacity, StyleSheet, TextInput, Dimensions,KeyboardAvoidingView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../../theme';
import TempPermJobsResult from './TempPermJobsResult.js';


class TemporaryPermanentJobsCalculator extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.inputsContainer}
          behavior="padding"
        >

        <ImageBackground source={images.background} style={styles.image}>


        {
          this.props.language === 'en' ?
            <View style={styles.calculTextContainer}>
              <Text style={styles.calculText}>Temporary and</Text>
              <Text style={styles.calculText}>occasional duties</Text>
            </View> :
            <View style={styles.calculTextContainer}>
              <Text style={styles.calculText}>Privremeni i</Text>
              <Text style={styles.calculText}>povremeni poslovi</Text>
            </View>
        }

      </ImageBackground>



        {
            <View style={styles.scrollViewContainer}>

                {
                  this.props.language === 'en' ?
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder="Enter the monthly net value of reimbursement (rsd)"
                      placeholderTextColor="black"
                    /> :
                    <TextInput
                      style={styles.inputText}
                      onChangeText={this.props.saveInput}
                      keyboardType="numeric"
                      placeholder="Unesite mesečni neto iznos naknade (rsd)"
                      placeholderTextColor="black"
                    />
                }



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
                      <Text style={styles.buttonText}>Izračunaj</Text>
                  }
                </TouchableOpacity>



                <Text style={styles.description}>{this.props.calculation.description[this.props.language]}</Text>
              </View>
        }


        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.calculation.input !== 0 && this.props.showResult}
          onRequestClose={() => false}>
          <View style={{flex: 1}}>
            <View style={{backgroundColor: colors.navigator}}>
              <TouchableOpacity
                style={styles.closeModalIcon}
                onPress={() => {
                  this.props.closeModal();
                  // this.setModalVisible(!this.state.modalVisible);
                }}>
                <Ionicons name="ios-close" size={40} color={colors.drawerBlue} />
              </TouchableOpacity>
            </View>

            {
              this.props.calculation.input !== 0 &&
              this.props.showResult ?
              // this.props.calculation.type === 'temporaryPermanentJobsCalculator' ?
                <TempPermJobsResult
                  calculation={this.props.calculation}
                /> :
                null
            }
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </ScrollView>

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
    fontSize: fonts.size.medium,
    fontFamily: 'openSansBold',
    color: colors.white,
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
  // buttonText: {
  //   alignSelf: 'center',
  //   fontSize: fonts.size.medium,
  //   fontFamily: 'openSansBold',
  //   color: colors.white,
  // },
  description: {
    alignSelf: 'center',
    marginTop: metrics.large,
    fontSize: fonts.size.small,
    color: 'rgb(128,128,128)'
  },
  closeModalIcon: {
    paddingTop: 13,
    margin: 15,
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    marginBottom: metrics.huge
  }
});
