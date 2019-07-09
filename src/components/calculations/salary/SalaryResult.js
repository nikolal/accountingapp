import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { metrics, colors, fonts, images } from '../../../theme';

class SalaryResult extends Component {
  // console.log(this.props.calculation.grossSalary)

  render() {
    const { calculation, localeString } = this.props;
    return (
      <View style={styles.maincontainer}>

        <ImageBackground
           source={images.background}
           style={styles.imageBackground}
         >
           {
             this.props.calculation.type === 'grossToNet' ?
               <View style={styles.calculTextContainer}>
                 {
                   this.props.language === 'en' ?
                     <Text style={styles.calculText}>????</Text> :
                     <View style={styles.backgroundImageTextContainer}>
                      <Text style={styles.calculText}>Obračun bruto zarada</Text>
                      <Text style={styles.calculText}>Bruto - Neto</Text>
                     </View>
                 }
                 {
                   this.props.language === 'en' ?
                     <View style={styles.backgroundImageSmallTextContainer}>
                      <Text style={styles.calculTextSmallText}>???</Text>
                      <Text style={styles.numberInput}>
                       {
                         calculation.grossSalary.value && calculation.grossSalary.value
                         .toLocaleString(localeString, { maximumFractionDigits: 2 })
                       }
                      </Text>
                      <Text style={styles.calculTextSmallText}> rsd</Text>
                     </View> :
                     <View style={styles.backgroundImageSmallTextContainer}>
                      <Text style={styles.calculTextSmallText}>Zadata vrednost:</Text>
                      <Text style={styles.numberInput}>
                       {
                         calculation.grossSalary.value && calculation.grossSalary.value
                         .toLocaleString(localeString, { maximumFractionDigits: 2 })
                       }
                      </Text>
                      <Text style={styles.calculTextSmallText}> rsd</Text>
                     </View>
                 }

               </View> : null
           }
           </ImageBackground>


         <View style={styles.container}>
          <ScrollView>

            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
                {
                  this.props.language === 'en' ?
                    <Text style={styles.text}>???</Text> :
                    <Text style={styles.text}>Porez na zarade</Text>
                }
                <View style={styles.numberContainerBlue}>
                  <Text style={styles.numberFirst}>{calculation.grossSalary.tax && calculation.grossSalary.tax.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
                {
                  this.props.language === 'en' ?
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.text}>?:</Text>
                      <Text style={styles.text}>??</Text>
                    </View> :
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.text}>Doprinosi na teret:</Text>
                      <Text style={styles.text}> Poslodavca</Text>
                    </View>

                }
                <View style={styles.numberContainer}>
                  <Text style={styles.number}>{calculation.totalContributionsEmployer && calculation.totalContributionsEmployer.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
                {
                  this.props.language === 'en' ?
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.text}>?:</Text>
                      <Text style={styles.text}>??</Text>
                    </View> :
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.text}>Doprinosi na teret:</Text>
                      <Text style={styles.text}> Zaposlenog</Text>
                    </View>
                }
                <View style={styles.numberContainer}>
                  <Text style={styles.number}>{calculation.totalContributionsEmployee && calculation.totalContributionsEmployee.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
                {
                  this.props.language === 'en' ?
                  <Text style={styles.text}>??</Text> :
                  <Text style={styles.text}>Ukupan trošak zarade</Text>
                }
                <View style={styles.numberContainer}>
                  <Text style={styles.number}>{calculation.totalSalary && calculation.totalSalary.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                {this.props.calculation.description[this.props.language]}
              </Text>
            </View>
            <TouchableOpacity style={styles.shareButton}>
            {
              this.props.language === 'en' ?
                <Text style={styles.shareText}>Share</Text> :
                <Text style={styles.shareText}>Podeli</Text>
            }
            </TouchableOpacity>
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

export default connect(stateToProps, null)(SalaryResult);

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
    fontFamily: 'openSansRegular',
    color: colors.white,
    fontSize: fonts.size.large,
  },
  backgroundImageTextContainer: {
    // position: 'center',
  },
  backgroundImageSmallTextContainer: {
    marginTop: metrics.xxxHuge,
    marginBottom: metrics.large,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberInput: {
    marginLeft: metrics.medium,
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.huge,
    color: '#47d6e2'
  },
  itemContainer: {
    backgroundColor: colors.white,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: metrics.hugeToExtrahuge,
    marginHorizontal: metrics.hugeToExtrahuge,
  },
  text: {
    alignSelf: 'center',
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

  },
  number: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    color: '#47d6e2'
  },
  descriptionContainer: {
    paddingHorizontal: metrics.huge,
    paddingBottom: metrics.huge,
  },
  description: {
    marginTop: metrics.large,
    fontSize: fonts.size.small,
    color: 'rgb(128,128,128)'
  },
  shareButton: {
    alignSelf: 'center',
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#47d6e2',
    paddingVertical: metrics.medium,
    marginBottom: metrics.large,
    borderRadius: 5
  },
  shareText: {
    textAlign: 'center',
    color: 'white',
    fontSize: fonts.size.large,
    borderRadius: 5
  }
});
