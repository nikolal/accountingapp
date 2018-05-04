import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts } from '../../theme';
import { Ionicons }  from '@expo/vector-icons';
import PropTypes from 'prop-types';

class ServicesDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'SERVICES DETAIL',
  })

  renderServices = (item, index) =>
    item.type === 'text' ?
      <View key={index} style={styles.paragraphsContainer}>
        <View style={styles.paragraphsCon}>
          <Text style={styles.textParagraph}>{item.value}</Text>
        </View>
        <Ionicons
          name="ios-arrow-forward"
          size={30}
          color={colors.lightBlue1}
          style={styles.arrowIcon}
        />
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
    backgroundColor: colors.white
  },
  innerContainer: {
    margin: metrics.medium,
  },
  paragraphsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.medium,
    borderBottomWidth: metrics.smallBorder,
    borderBottomColor: colors.grey,
  },
  paragraphsCon: {
    width: Dimensions.get('window').width / 1.3,
  },
  textParagraph: {
    fontSize: fonts.size.large,
    fontFamily: 'openSansRegular',
    color: colors.grey,
  },
  headlineContainer: {
    padding: metrics.medium,
    margin: metrics.small,
    marginTop: metrics.huge
  },
  headline: {
    fontSize: fonts.size.huge,
    color: colors.lightBlue1,
    fontFamily: 'openSansBold',
  }
});
