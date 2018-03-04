import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons }  from '@expo/vector-icons';
import { saveServices } from './ServicesContainer.js';
import { metrics, colors, fonts } from '../../theme';

class Services extends Component {

  goToServicesDetail = (screenName, services) => {
    this.props.saveServices(services);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToServicesDetail('ServicesDetail', item)} style={styles.item}>
      <Text>{item.headline}</Text>
      <Text style={styles.titleText}>{item.text}</Text>
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          {this.props.ourServices.map(this.renderList)}
        </View>
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  ourServices: state.servicesReducer.ourServices
});

const dispatchToProps = dispatch => ({
  saveServices: bindActionCreators(saveServices, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Services);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.small,
    padding: metrics.small,
    backgroundColor: colors.lightGrey,
  },
  innerContainer: {
    flex: 1,
    marginBottom: metrics.small,
    padding: metrics.small,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  item: {
    flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',

  },
  // textContainer: {
  //   flex: 1,
  //   flexWrap: 'wrap',
  //   margin: metrics.medium,
  // },
  // titleText: {
  //   fontSize: fonts.size.medium,
  //   fontWeight: fonts.weight.large,
  //   marginBottom: metrics.medium,
  // },
  // dateText: {
  //   color: colors.grey,
  //   fontSize: fonts.size.small
  // },
  // arrowIcon: {
  //   right: metrics.small
  // }
});
