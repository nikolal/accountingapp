import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Share } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import HeaderTitle from './HeaderTitle.js';

class SalaryResult extends Component {

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
  // static navigationOptions = ({ navigation }) => ({
  //   headerTitle: <HeaderTitle />
  // })
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
                    <View>
                     <Text style={styles.calculText}>Temporary and</Text>
                     <Text style={styles.calculText}>occasional duties</Text>
                    </View> :
                     <View style={styles.backgroundImageTextContainer}>
                      <Text style={styles.calculText}>Privremeni i</Text>
                      <Text style={styles.calculText}>povremeni poslovi</Text>
                     </View>
                 }
                 {
                   this.props.language === 'en' ?
                     <View style={styles.backgroundImageSmallTextContainer}>
                      <Text style={styles.calculTextSmallText}>Entered value</Text>
                      <Text style={styles.numberInput}>
                       {
                         calculation.tempPermJobsgross.net && calculation.tempPermJobsgross.net
                         .toLocaleString(localeString, { maximumFractionDigits: 2 })
                       }
                      </Text>
                      <Text style={styles.calculTextSmallText}> rsd</Text>
                     </View> :
                     <View style={styles.backgroundImageSmallTextContainer}>
                      <Text style={styles.calculTextSmallText}>Zadata vrednost:</Text>
                      <Text style={styles.numberInput}>
                       {
                         calculation.tempPermJobsgross.net && calculation.tempPermJobsgross.net
                         .toLocaleString(localeString, { maximumFractionDigits: 2 })
                       }
                      </Text>
                      <Text style={styles.calculTextSmallText}> rsd</Text>
                     </View>
                 }

               </View>
           }
          </ImageBackground>



          <ScrollView style={styles.container}>

            <View style={styles.itemContainerDark}>
              <View style={styles.innerContainer}>
                {
                  this.props.language === 'en' ?
                    <Text style={styles.text}>Gross salary</Text> :
                    <Text style={styles.text}>Bruto zarada</Text>
                }
                <View style={styles.numberContainer}>
                  <Text style={styles.numberFirst}>{calculation.tempPermJobsgross.value.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
              {
                this.props.language === 'en' ?
                  <View>
                    <Text style={styles.text}>Contributions on behalf</Text>
                    <Text style={styles.text}>employee</Text>
                  </View> :
                  <View>
                    <Text style={styles.text}>Doprinosi na</Text>
                    <Text style={styles.text}>teret zaposlenog</Text>
                  </View>
              }
              <View style={styles.numberContainer}>
                <Text
                  style={styles.number}>{calculation.tempPermJobsgross.firstData.employees.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                </Text>
              </View>
              </View>
            </View>

            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
              {
                this.props.language === 'en' ?
                  <View>
                    <Text style={styles.text}>Contributions on behalf</Text>
                    <Text style={styles.text}>employer</Text>
                  </View> :
                  <View>
                    <Text style={styles.text}>Doprinosi na </Text>
                    <Text style={styles.text}>teret poslodavca</Text>
                  </View>
              }
              <View style={styles.numberContainer}>
                <Text
                  style={styles.number}>{calculation.tempPermJobsgross.secondData.employer.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                </Text>
              </View>
            </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
              {
                this.props.language === 'en' ?
                <Text style={styles.text}>Total value of costs</Text> :
                <Text style={styles.text}>Ukupan izdatak</Text>
              }

            <View style={styles.numberContainerBlue}>
              <Text
                style={styles.number}>{calculation.tempPermJobsgross.secondData.employerTotal.toLocaleString(localeString, { maximumFractionDigits: 2 })}
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
