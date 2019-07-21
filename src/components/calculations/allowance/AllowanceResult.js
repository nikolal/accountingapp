import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, TouchableOpacity, Share } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts, images } from '../../../theme';

class AllowanceResult extends Component {

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
    const { calculation, localeString } = this.props;
    return (
    <View style={styles.maincontainer}>
      <ImageBackground
         source={images.background}
         style={styles.imageBackground}
       >

         {
           this.props.calculation.type === 'allowanceHome' ?
             <View style={styles.calculTextContainer}>
               {
                 this.props.language === 'en' ?
                   <Text style={styles.calculText}>????</Text> :
                   <View style={styles.backgroundImageTextContainer}>
                    <Text style={styles.calculText}>Obračun dnevnica</Text>
                    <Text style={styles.calculText}>u zemlji</Text>
                   </View>
               }
               {
                 this.props.language === 'en' ?
                   <View style={styles.backgroundImageSmallTextContainer}>
                    <Text style={styles.calculTextSmallText}>???</Text>
                    <Text style={styles.numberInput}>
                     {
                       calculation.allowancesHome.value && calculation.allowancesHome.value
                       .toLocaleString(localeString, { maximumFractionDigits: 2 })
                     }
                    </Text>
                    <Text style={styles.calculTextSmallText}> rsd</Text>
                   </View> :
                   <View style={styles.backgroundImageSmallTextContainer}>
                    <Text style={styles.calculTextSmallText}>Zadata vrednost:</Text>
                    <Text style={styles.numberInput}>
                     {
                       calculation.allowancesHome.value && calculation.allowancesHome.value
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
                  <Text style={styles.text}>Neto dnevnica u RSD</Text>
              }
              <View style={styles.numberContainerBlue}>
                <Text
                  style={styles.numberFirst}>{calculation.allowancesHome.value && calculation.allowancesHome.value.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.innerContainer}>
              {
                this.props.language === 'en' ?
                  <Text style={styles.text}>???</Text> :
                  <Text style={styles.text}>Osnovica za oporezivanje</Text>
              }
              <View style={styles.numberContainer}>
                <Text
                  style={styles.number}>{calculation.allowancesHome.gross && calculation.allowancesHome.gross.toLocaleString(localeString, { maximumFractionDigits: 2 })}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.innerContainer}>
              {
                this.props.language === 'en' ?
                  <Text style={styles.text}>???</Text> :
                  <Text style={styles.text}>Porez</Text>
              }
              <View style={styles.numberContainer}>
              <Text
                style={styles.number}>{calculation.allowancesHome.tax && calculation.allowancesHome.tax.toLocaleString(localeString, { maximumFractionDigits: 2 })}
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

export default connect(stateToProps, null)(AllowanceResult);


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
    marginTop: metrics.xxxHuge,
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
    paddingTop: metrics.huge,
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
