import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Dimensions, StyleSheet, TextInput, TouchableOpacity, Share, ImageBackground, ScrollView } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import NumberFormat from 'react-number-format';


class SalaryResultNet extends Component {

  render() {

    const { calculation, localeString } = this.props;

    return (
      <View style={styles.maincontainer}>
        <ImageBackground
           source={images.background}
           style={styles.imageBackground}
         >

           {
             this.props.calculation.type === 'netToGross' ?
               <View style={styles.calculTextContainer}>
                 {
                   this.props.language === 'en' ?
                    <View>
                     <Text style={styles.calculText}>Calculation of salary</Text>
                     <Text style={styles.calculText}>Net - Gross</Text>
                    </View> :
                     <View style={styles.backgroundImageTextContainer}>
                      <Text style={styles.calculText}>Obračun zarada</Text>
                      <Text style={styles.calculText}>Neto - Bruto I</Text>
                     </View>
                 }
                 {
                   this.props.language === 'en' ?
                     <View style={styles.backgroundImageSmallTextContainer}>
                      <Text style={styles.calculTextSmallText}>Entered value</Text>
                      <NumberFormat
                          value={calculation.input && calculation.input}
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
                          value={calculation.input && calculation.input}
                          displayType={'text'}
                          decimalScale={2}
                          decimalSeparator={','}
                          thousandSeparator={'.'}
                          renderText={value => <Text style={styles.numberInput}>{value}</Text>}
                        />
                      <Text style={styles.calculTextSmallText}> rsd</Text>
                     </View>
                 }

               </View> : null
           }
           </ImageBackground>

           <View style={styles.container}>

            <ScrollView style={styles.container}>

              <View style={styles.itemContainer}>
                <View style={styles.innerContainer}>
                  {
                    this.props.language === 'en' ?
                    <Text style={styles.text}>Total gross salary (gross I)</Text> :
                    <View>
                      <Text style={styles.text}>Ukupna bruto zarada</Text>
                      <Text style={styles.text}>(bruto I)</Text>
                    </View>

                  }
                  {
                    this.props.language === 'en' ?
                      <View style={styles.numberContainerBlue}>
                        <NumberFormat
                          value={calculation.netSalary.value && calculation.netSalary.value}
                          displayType={'text'}
                          decimalScale={2}
                          decimalSeparator={'.'}
                          thousandSeparator={','}
                          renderText={value => <Text style={styles.numberFirst}>{value}</Text>}
                        />
                      </View> :
                      <View style={styles.numberContainerBlue}>
                        <NumberFormat
                          value={calculation.netSalary.value && calculation.netSalary.value}
                          displayType={'text'}
                          decimalScale={2}
                          decimalSeparator={','}
                          thousandSeparator={'.'}
                          renderText={value => <Text style={styles.numberFirst}>{value}</Text>}
                        />
                      </View>
                  }
                </View>
              </View>
              <View style={styles.itemContainer}>
                <View style={styles.innerContainer}>
                  {
                    this.props.language === 'en' ?
                      <Text style={styles.text}>The value of tax</Text> :
                      <Text style={styles.text}>Porez na zarade</Text>
                  }
                  {
                    this.props.language === 'en' ?
                      <View style={styles.numberContainer}>
                        <NumberFormat
                          value={calculation.grossSalary.tax && calculation.grossSalary.tax}
                          displayType={'text'}
                          decimalScale={2}
                          decimalSeparator={'.'}
                          thousandSeparator={','}
                          renderText={value => <Text style={styles.number}>{value}</Text>}
                        />
                      </View> :
                      <View style={styles.numberContainer}>
                        <NumberFormat
                          value={calculation.grossSalary.tax && calculation.grossSalary.tax}
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
              <View style={styles.itemContainer}>
                <View style={styles.innerContainer}>
                  {
                    this.props.language === 'en' ?
                      <View style={{flexDirection: 'column'}}>
                        <Text style={styles.text}>Contributions</Text>
                        <Text style={styles.text}>on behalf of employer</Text>
                      </View> :
                      <View style={{flexDirection: 'column'}}>
                        <Text style={styles.text}>Doprinosi na</Text>
                        <Text style={styles.text}>teret poslodavca</Text>
                      </View>
                  }
                  {
                    this.props.language === 'en' ?
                      <View style={styles.numberContainer}>
                        <NumberFormat
                          value={calculation.totalEmployeeContribution && calculation.totalEmployeeContribution}
                          displayType={'text'}
                          decimalScale={2}
                          decimalSeparator={'.'}
                          thousandSeparator={','}
                          renderText={value => <Text style={styles.number}>{value}</Text>}
                        />
                      </View> :
                      <View style={styles.numberContainer}>
                        <NumberFormat
                          value={calculation.totalEmployeeContribution && calculation.totalEmployeeContribution}
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
              <View style={styles.itemContainer}>
                <View style={styles.innerContainer}>
                {
                  this.props.language === 'en' ?
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.text}>Contributions on</Text>
                      <Text style={styles.text}>behalf of employee</Text>
                    </View> :
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.text}>Doprinosi na</Text>
                      <Text style={styles.text}>teret zaposlenog</Text>
                    </View>
                }
                {
                  this.props.language === 'en' ?
                    <View style={styles.numberContainer}>
                      <NumberFormat
                        value={calculation.totalEmployerContribution && calculation.totalEmployerContribution}
                        displayType={'text'}
                        decimalScale={2}
                        decimalSeparator={'.'}
                        thousandSeparator={','}
                        renderText={value => <Text style={styles.number}>{value}</Text>}
                      />
                    </View> :
                    <View style={styles.numberContainer}>
                      <NumberFormat
                        value={calculation.totalEmployerContribution && calculation.totalEmployerContribution}
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
              <View style={styles.itemContainer}>
                <View style={styles.innerContainer}>
                  {
                    this.props.language === 'en' ?
                      <View>
                        <Text style={styles.text}>Total cost for</Text>
                        <Text style={styles.text}>employer (gross II)</Text>
                      </View> :
                      <View>
                        <Text style={styles.text}>Bruto II</Text>
                        <Text style={styles.text}>(ukupni trošak zarade)</Text>
                      </View>
                  }
                  {
                  this.props.language === 'en' ?
                    <View style={styles.numberContainerBlue}>
                      <NumberFormat
                        value={calculation.totalNetSalaryCost && calculation.totalNetSalaryCost}
                        displayType={'text'}
                        decimalScale={2}
                        decimalSeparator={'.'}
                        thousandSeparator={','}
                        renderText={value => <Text style={styles.number}>{value}</Text>}
                      />
                    </View> :
                    <View style={styles.numberContainerBlue}>
                      <NumberFormat
                        value={calculation.totalNetSalaryCost && calculation.totalNetSalaryCost}
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
        </View>
    );
  }
}


const stateToProps = state => ({
  localeString: state.settingsReducer.localeString,
  language: state.settingsReducer.language
});

export default connect(stateToProps, null)(SalaryResultNet);

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
    marginTop: 45,
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
