import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {saveCalculation} from './CalculationsContainer';
import HeaderTitle from './HeaderTitle.js';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts, images } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

class Calculations extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle />
  });


  goToCalculation = (item) => {
    this.props.saveCalculation(item);
    this.props.navigation.navigate('CalculationDetail1');
  };

  renderList = (item) =>
    <TouchableOpacity style={styles.item} key={item.name[this.props.language]} onPress={() => this.goToCalculation(item)}>
      <View style={styles.imageTextContainer}>
        <Image source={item.image} style={styles.backgroundImage}/>
        <View style={styles.innerImageContainer}>
          <Image source={item.icons} style={styles.innerImage}/>
          <TouchableOpacity style={styles.goButton} key={item.name[this.props.language]} onPress={() => this.goToCalculation(item)}><Text style={styles.buttonText}>>>></Text></TouchableOpacity>
        </View>
        <Text style={styles.textItem} numberOfLines={2}>{item.name[this.props.language]}</Text>
        <Text style={styles.explanation} numberOfLines={1}>{item.nameExpl && item.nameExpl[this.props.language]}</Text>
      </View>
    </TouchableOpacity>

  render(){
    const { calculations } = this.props;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
        <LinearGradient
        colors={['white', 'white', 'white']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: Dimensions.get('window').height
          }}
        />
        </View>
        <View style={styles.itemContainer}>
          {
            calculations.map(this.renderList)
          }
        </View>
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  calculations: state.calculationsReducer.calculations,
  calculation: state.calculationsReducer.calculation,
  language: state.settingsReducer.language

});

const dispatchToProps = dispatch => ({
  saveCalculation: bindActionCreators(saveCalculation, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Calculations);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: metrics.medium,
  },
  imageTextContainer: {
    width: Dimensions.get('window').width / 2.25,
    height: Dimensions.get('window').height / 3.8,
    marginBottom: metrics.medium,
  },
  backgroundImage: {
    width: Dimensions.get('window').width / 2.25,
    height: Dimensions.get('window').height / 5,
    alignSelf: 'center',
  },
  innerImageContainer: {
    width: Dimensions.get('window').width / 2.25,
    height: Dimensions.get('window').height / 5,
    position: 'absolute',
    backgroundColor: '#10465c40',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  innerImage: {
    // zIndex: 100,
    height: 50,
    width: 41
  },
  goButton: {
    alignSelf: 'flex-start',
    marginLeft: metrics.medium,
    marginBottom: metrics.medium,
    marginTop: metrics.large,
    paddingVertical: metrics.small,
    paddingHorizontal: metrics.smallToMedium,
    backgroundColor: 'rgb(20,183,197)',
    borderRadius: metrics.small
  },
  buttonText: {
    fontSize: fonts.size.tiny,
    color: colors.white
  },
  textItem: {
    textAlign: 'center',
    margin: metrics.small,
    color: 'rgb(16,70,92)',
    fontFamily: 'openSansBold',
    fontSize: fonts.size.small ,
  },
  explanation: {
    marginLeft: metrics.small,
    color: 'rgb(16,70,92)',
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.tiny,
  }
});
