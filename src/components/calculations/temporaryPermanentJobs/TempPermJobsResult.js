import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';
import HeaderTitle from './HeaderTitle.js';

class SalaryResult extends Component {

  // static navigationOptions = ({ navigation }) => ({
  //   headerTitle: <HeaderTitle />
  // })
  render() {
    const { calculation, localeString } = this.props;
    console.log(calculation);
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
                         calculation.tempPermJobsgross.value && calculation.tempPermJobsgross.value
                         .toLocaleString(localeString, { maximumFractionDigits: 2 })
                       }
                      </Text>
                      <Text style={styles.calculTextSmallText}> rsd</Text>
                     </View> :
                     <View style={styles.backgroundImageSmallTextContainer}>
                      <Text style={styles.calculTextSmallText}>Zadata vrednost:</Text>
                      <Text style={styles.numberInput}>
                       {
                         calculation.tempPermJobsgross.value && calculation.tempPermJobsgross.value
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
                    <Text style={styles.text}>Gross</Text> :
                    <Text style={styles.text}>Bruto zarada (rsd)</Text>
                }
                <View style={styles.numberContainerBlue}>
                  <Text style={styles.numberFirst}>{calculation.tempPermJobsgross.value.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
                <View style={{flexDirection: 'column'}}>
                <Text style={styles.text}>Doprinosi na zarade</Text>
                <Text style={styles.text}>na teret zaposlenog (rsd)</Text>
              </View>
              <View style={styles.numberContainer}>
                <Text
                  style={styles.number}>{calculation.tempPermJobsgross.firstData.employees.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                </Text>
              </View>
              </View>
            </View>

            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
                <View style={{flexDirection: 'column'}}>
                <Text style={styles.text}>Doprinosi na zarade</Text>
                <Text style={styles.text}>na teret poslodavca (rsd)</Text>
              </View>
              <View style={styles.numberContainer}>
                <Text
                  style={styles.number}>{calculation.tempPermJobsgross.secondData.employer.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                </Text>
              </View>
            </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.innerContainer}>
                <Text style={styles.text}>Ukupan izdatak (rsd)</Text>

            <View style={styles.numberContainer}>
              <Text
                style={styles.number}>{calculation.tempPermJobsgross.secondData.employerTotal.toLocaleString(localeString, { maximumFractionDigits: 2 })}
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
    // alignSelf: 'center',
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
