import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, ScrollView, Share } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';

class AnnualTaxResult extends Component {

  share = () => {
    Share.share({
      message: 'BAM: we\'re helping your business with awesome React Native apps',
      url: 'http://bam.tech',
      title: 'Wow, did you see that?'
    }, {
      // Android only:
      dialogTitle: 'Share BAM goodness',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    });
  }

  render() {
    console.log(this.props.calculation);

    const { calculation, localeString } = this.props;
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
                     <Text style={styles.calculText}>????</Text> :
                     <View style={styles.backgroundImageTextContainer}>
                      <Text style={styles.calculText}>Godišnji porez</Text>
                      <Text style={styles.calculText}>na dohodak građana</Text>
                     </View>
                 }
                 {
                   this.props.language === 'en' ?
                     <View style={styles.backgroundImageSmallTextContainer}>
                      <Text style={styles.calculTextSmallText}>???</Text>
                      <Text style={styles.numberInput}>
                        {
                          calculation.annualTax.value && calculation.annualTax.value.toLocaleString(localeString, { maximumFractionDigits: 2 })
                        }
                      </Text>
                      <Text style={styles.calculTextSmallText}> rsd</Text>
                     </View> :
                     <View style={styles.backgroundImageSmallTextContainer}>
                      <Text style={styles.calculTextSmallText}>Zadata vrednost:</Text>
                      <Text style={styles.numberInput}>
                       {
                         calculation.annualTax.value && calculation.annualTax.value
                         .toLocaleString(localeString, { maximumFractionDigits: 2 })
                       }
                      </Text>
                      <Text style={styles.calculTextSmallText}> rsd</Text>
                     </View>
                 }
               </View>
           }
           </ImageBackground>

           <View style={styles.container}>
            <ScrollView>

              <View style={styles.itemContainer}>
                <View style={styles.innerContainer}>
                  {
                    this.props.language === 'en' ?
                      <Text style={styles.text}>???</Text> :
                      <Text style={styles.text}>Godišnja neto zarada</Text>
                  }
                  <View style={styles.numberContainer}>
                    <Text style={styles.numberFirst}>{calculation.annualTax.value && calculation.annualTax.value.toLocaleString(localeString, { maximumFractionDigits: 2 })}
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
                        <Text style={styles.text}>Broj izdržavanih</Text>
                        <Text style={styles.text}>članova porodice </Text>
                      </View>

                  }
                  <View style={styles.numberContainer}>
                    <Text style={styles.number}>{calculation.annualTax.familyNumber && calculation.annualTax.familyNumber}
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
                        <Text style={styles.text}>Ukupan izdatak za porez</Text>
                      </View>

                  }
                  <View style={styles.numberContainerBlue}>
                    <Text style={styles.number}>{calculation.annualTax.finnalAnnualTax && calculation.annualTax.finnalAnnualTax.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.shareButton} onPress={this.share}>
              {
                this.props.language === 'en' ?
                  <Text style={styles.shareText}>Share</Text> :
                  <Text style={styles.shareText}>Podeli</Text>
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

export default connect(stateToProps, null)(AnnualTaxResult);

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
    // backgroundColor: 'red',
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
    padding: metrics.huge,
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
