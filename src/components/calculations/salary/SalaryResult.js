import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, Dimensions } from 'react-native';
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
            <View style={styles.itemContainerDark}>
              <View style={styles.innerContainer}>
                {
                  this.props.language === 'en' ?
                    <Text style={styles.text}>???</Text> :
                    <Text style={styles.text}>Porez na zarade</Text>


                }
                <Text style={styles.number}>{calculation.grossSalary.tax && calculation.grossSalary.tax.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
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
                <Text style={styles.number}>{calculation.totalContributionsEmployer && calculation.totalContributionsEmployer.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
              </View>
            </View>
            <View style={styles.itemContainerDark}>
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
                <Text style={styles.number}>{calculation.totalContributionsEmployee && calculation.totalContributionsEmployee.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
              </View>
            </View>
            <View style={styles.itemContainerDark}>
              <View style={styles.innerContainer}>
                {
                  this.props.language === 'en' ?
                  <Text style={styles.text}>??</Text> :
                  <Text style={styles.text}>Ukupan trošak zarade</Text>
                }
                <Text style={styles.number}>{calculation.totalSalary && calculation.totalSalary.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
              </View>
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
    backgroundColor: colors.white
  },
  itemContainerDark: {
    backgroundColor: colors.veryLightGrey,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: metrics.hugeToExtrahuge,
    marginHorizontal: metrics.hugeToExtrahuge,
    borderColor: '#e6e6e6',
    borderBottomWidth: metrics.tinyBorder,
    borderTopWidth: metrics.tinyBorder
  },
  text: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    color: colors.grey
  },
  number: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.huge,
    color: '#47d6e2'
  }
});
