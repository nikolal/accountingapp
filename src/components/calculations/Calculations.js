import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {saveCalculation} from './CalculationsContainer';
import PropTypes from 'prop-types';


class Calculations extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'CALCULATIONS',
  })

  goToCalculation = (item) => {
    this.props.saveCalculation(item);
    this.props.navigation.navigate('CalculationDetail');
  };

  renderList = (item) =>
    <TouchableOpacity style={styles.item} key={item.name} onPress={() => this.goToCalculation(item)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>

  render(){
    const { calculations } = this.props;
    return (
      <View style={styles.container}>
        {
          calculations.map(this.renderList)
        }
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  item: {

  }
})
