import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts, images } from '../../../theme';
import NumberFormat from 'react-number-format';

class AllowanceResult extends Component {

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
                  <View>
                    <Text style={styles.calculText}>Daily allowances</Text>
                    <Text style={styles.calculText}>in the  country</Text>
                  </View> :
                  <Text style={styles.calculText}>Dnevnice u zemlji</Text>
               }
               {
                 this.props.language === 'en' ?
                   <View style={styles.backgroundImageSmallTextContainer}>
                    <Text style={styles.calculTextSmallText}>Entered value</Text>
                    <NumberFormat
                      value={calculation.input && calculation.input}
                      displayType={'text'}
                      decimalScale={2}
                      decimalSeparator={','}
                      thousandSeparator={'.'}
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
        <ScrollView>

          <View style={styles.itemContainer}>
            <View style={styles.innerContainer}>
              {
                this.props.language === 'en' ?
                  <View>
                    <Text style={styles.text}>Value of daily allowance</Text>
                    <Text style={styles.text}>in the country</Text>
                  </View> :
                  <Text style={styles.text}>Isplaćena dnevnice u zemlji</Text>
              }
              {
                this.props.language === 'en' ?
                  <View style={styles.numberContainer}>
                    <NumberFormat
                      value={calculation.input && calculation.input}
                      displayType={'text'}
                      decimalScale={2}
                      decimalSeparator={'.'}
                      thousandSeparator={','}
                      renderText={value => <Text style={styles.number}>{value}</Text>}
                    />
                  </View> :
                  <View style={styles.numberContainer}>
                    <NumberFormat
                      value={calculation.input && calculation.input}
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
                  <Text style={styles.text}>Tax base</Text> :
                  <Text style={styles.text}>Osnovica za oporezivanje</Text>
              }
              {
                this.props.language === 'en' ?
                  <View style={styles.numberContainer}>
                    <NumberFormat
                      value={calculation.allowancesHome.gross && calculation.allowancesHome.gross}
                      displayType={'text'}
                      decimalScale={2}
                      decimalSeparator={'.'}
                      thousandSeparator={','}
                      renderText={value => <Text style={styles.number}>{value}</Text>}
                    />
                  </View> :
                  <View style={styles.numberContainer}>
                    <NumberFormat
                      value={calculation.allowancesHome.gross && calculation.allowancesHome.gross}
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
                  <Text style={styles.text}>Total value of tax cost</Text> :
                  <Text style={styles.text}>Ukupan izdatak za porez</Text>
              }
              {
                this.props.language === 'en' ?
                  <View style={styles.numberContainerBlue}>
                    <NumberFormat
                      value={calculation.allowancesHome.tax && calculation.allowancesHome.tax}
                      displayType={'text'}
                      decimalScale={2}
                      decimalSeparator={'.'}
                      thousandSeparator={','}
                      renderText={value => <Text style={styles.number}>{value}</Text>}
                    />
                  </View> :
                  <View style={styles.numberContainerBlue}>
                    <NumberFormat
                      value={calculation.allowancesHome.tax && calculation.allowancesHome.tax}
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
          <TouchableOpacity
            style={styles.shareButton}
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

export default connect(stateToProps, null)(AllowanceResult);


const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  imageBackground: {
    height: Dimensions.get('window').height / 3.1,
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
