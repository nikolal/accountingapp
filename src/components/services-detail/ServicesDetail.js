import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts } from '../../theme';
import PropTypes from 'prop-types';

class ServicesDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'SERVICES DETAIL',
  })

  renderServices = (item, index) =>
    item.type === 'text' ?
      <View key={index} style={styles.paragraphsContainer}>
        <Text style={styles.textParagraph}>{item.value}</Text> 
      </View> :
    item.type === 'headline' ?
      <View key={index} style={styles.headlineContainer}>
        <Text style={styles.headline}>{item.value}</Text>
      </View> :
    null;

  render(){
    const { services } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          {services.paragraphs.map(this.renderServices)}
        </View>
      </ScrollView>
    );
  }
}

ServicesDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  services: state.servicesReducer.services
});

export default connect(stateToProps, null)(ServicesDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey
  },
  innerContainer: {
    margin: metrics.medium,
    paddingHorizontal: metrics.medium,
    paddingBottom: metrics.medium,
    backgroundColor: colors.white,
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
  paragraphsContainer: {
    padding: metrics.large,
    borderBottomWidth: metrics.smallBorder,
    borderBottomColor: colors.grey,
  },
  textParagraph: {
    fontSize: fonts.size.medium
  },
  headlineContainer: {
    padding: metrics.medium,
    margin: metrics.small,
    marginTop: metrics.huge
  },
  headline: {
    fontSize: fonts.size.large,
    fontWeight: fonts.weight.large,
    color: 'rgb(231, 76, 60)',
  }
});
