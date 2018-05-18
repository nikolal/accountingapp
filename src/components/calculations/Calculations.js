import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {saveCalculation} from './CalculationsContainer';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';
import { Ionicons, Entypo }  from '@expo/vector-icons';


class Calculations extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'CALCULATIONS',
  })

  goToCalculation = (item) => {
    this.props.saveCalculation(item);
    this.props.navigation.navigate('CalculationDetail1');
  };

  renderList = (item) =>
    <TouchableOpacity style={styles.item} key={item.name} onPress={() => this.goToCalculation(item)}>
      <Entypo
        name={item.icon}
        size={25}
        color={colors.lightBlue1}
        style={styles.icons}
      />
      <View style={styles.textArrowContainer}>
        <Text style={styles.textItem}>{item.name}</Text>
        <Entypo
          name="chevron-small-right"
          size={35}
          color={colors.lightBlue1}
          style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>

  render(){
    const { calculations } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/VAT-representative-Serbia.jpg' }}
          />
          <View style={styles.itemContainer}>
            {
              calculations.map(this.renderList)
            }
        </View>
        </View>
      </View>
    );
  }
}

const stateToProps = state => ({
  calculations: state.calculationsReducer.calculations,
  calculation: state.calculationsReducer.calculation

});

const dispatchToProps = dispatch => ({
  saveCalculation: bindActionCreators(saveCalculation, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Calculations);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
    margin: metrics.medium,
  },
  image: {
    height: Dimensions.get('window').height / 3.5,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: metrics.huge,
    borderBottomColor: colors.grey,
    borderBottomWidth: metrics.smallBorder,
  },
  icons: {
    marginLeft: metrics.medium
  },
  textArrowContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: metrics.medium,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textItem: {
    color: colors.grey,
    fontFamily: 'openSansBold',
    fontSize: metrics.largeToHuge,
  }
});
