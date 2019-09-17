import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Share } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import NumberFormat from 'react-number-format';

class ContractTaxResult extends Component {

  render() {
    const { calculation, localeString } = this.props;
    // console.log(calculation);
    return (
      <View style={styles.maincontainer}>

        <ImageBackground
           source={images.background}
           style={styles.imageBackground}
         >

           {
               <View style={styles.calculTextContainer}>
                 {
                   this.props.language === 'en' ?
                     <Text style={styles.calculText}>Service contract</Text> :
                     <View style={styles.backgroundImageTextContainer}>
                      <Text style={styles.calculText}>Ugovor o delu</Text>
                     </View>
                 }
                 {
                   this.props.language === 'en' ?
                     <View style={styles.backgroundImageSmallTextContainer}>
                      <Text style={styles.calculTextSmallText}>Entered value</Text>
                      <NumberFormat
                          value={calculation.contractTax.value && calculation.contractTax.value}
                          displayType={'text'}
                          decimalScale={2}
                          decimalSeparator={'.'}
                          thousandSeparator={','}
                          renderText={value => <Text style={styles.numberInput}>{value}</Text>}
                        />
                      <Text style={styles.calculTextSmallText}> rsd</Text>
                     </View> :
                     <View style={styles.backgroundImageSmallTextContainer}>
                      <Text style={styles.calculTextSmallText}>Zadata vrednost:</Text>
                      <NumberFormat
                          value={calculation.contractTax.value && calculation.contractTax.value}
                          displayType={'text'}
                          decimalScale={2}
                          decimalSeparator={','}
                          thousandSeparator={'.'}
                          renderText={value => <Text style={styles.numberInput}>{value}</Text>}
                        />
                      <Text style={styles.calculTextSmallText}> rsd</Text>
                     </View>
                 }

               </View>
           }
          </ImageBackground>

          <ScrollView style={styles.container}>

            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
                {
                  this.props.language === 'en' ?
                    <Text style={styles.text}>Total expense (rsd)</Text> :
                    <Text style={styles.text}>Ukupan izdatak (rsd)</Text>
                }
                {
                    this.props.language === 'en' ?
                      <View style={styles.numberContainerBlue}>
                        <NumberFormat
                          value={calculation.contractTax.gross && calculation.contractTax.gross}
                          displayType={'text'}
                          decimalScale={2}
                          decimalSeparator={'.'}
                          thousandSeparator={','}
                          renderText={value => <Text style={styles.number}>{value}</Text>}
                        />
                      </View> :
                      <View style={styles.numberContainerBlue}>
                        <NumberFormat
                          value={calculation.contractTax.gross && calculation.contractTax.gross}
                          displayType={'text'}
                          decimalScale={2}
                          decimalSeparator={','}
                          thousandSeparator={'.'}
                          renderText={value => <Text style={styles.number}>{value}</Text>}
                        />
                      </View>
                  }
                  </View>
                </View>
                <TouchableOpacity style={styles.shareButton}
                  onPress={() => {
                    this.props.closeModal();
                  }}>
                {
                  this.props.language === 'en' ?
                    <Text style={styles.shareText}>Back</Text> :
                    <Text style={styles.shareText}>Nazad</Text>
                }
                </TouchableOpacity>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.description}>
                    {this.props.calculation.description[this.props.language]}
                  </Text>
                </View>
              </ScrollView>
          </View>
        );
      }
    }

const stateToProps = state => ({
  localeString: state.settingsReducer.localeString,
  language: state.settingsReducer.language
});

export default connect(stateToProps, null)(ContractTaxResult);

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  imageBackground: {
    height: Dimensions.get('window').height / 2.9,
    justifyContent: 'flex-end',
  },
  calculText: {
    fontFamily: 'openSansRegular',
    color: colors.white,
    fontSize: fonts.size.huge,
    textAlign: 'center'
  },
  calculTextSmallText: {
    fontSize: fonts.size.small,
    fontFamily: 'openSansBold',
    color: colors.white,
  },
  backgroundImageSmallTextContainer: {
    backgroundColor: '#08000060',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.huge
  },
  numberInput: {
    marginLeft: metrics.medium,
    fontSize: fonts.size.small,
    fontFamily: 'openSansBold',
    color: colors.white,
  },
  itemContainer: {
    backgroundColor: colors.white,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: metrics.huge,
    marginHorizontal: metrics.hugeToExtrahuge,
  },
  text: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    color: 'rgb(128,128,128)'
  },
  numberContainerBlue: {
    width: Dimensions.get('window').width / 3.1,
    borderColor: 'rgb(128,128,128)',
    borderWidth: 1,
    borderRadius: metrics.small,
    padding: metrics.medium,
    backgroundColor: '#d3f5f8'
  },
  numberContainer: {
    width: Dimensions.get('window').width / 3.1,
    borderColor: 'rgb(128,128,128)',
    borderWidth: 1,
    borderRadius: metrics.small,
    padding: metrics.medium
  },
  numberFirst: {
    color: 'rgb(128,128,128)',
    textAlign: 'center'

  },
  number: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    color: 'rgb(128,128,128)',
    textAlign: 'center'

  },
  descriptionContainer: {
    paddingBottom: metrics.huge,
    marginHorizontal: metrics.hugeToExtrahuge,
  },
  description: {
    fontSize: fonts.size.small,
    color: 'rgb(128,128,128)'
  },
  shareButton: {
    backgroundColor: '#14B7C5',
    marginVertical: metrics.hugeToExtrahuge,
    padding: metrics.medium,
    borderRadius: metrics.small,
    marginHorizontal: metrics.hugeToExtrahuge,
  },
  shareText: {
    textAlign: 'center',
    color: 'white',
    fontSize: fonts.size.large,
    borderRadius: 5
  }
});
