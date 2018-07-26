import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts } from '../../theme';
import { Ionicons }  from '@expo/vector-icons';
// import PropTypes from 'prop-types';

class ServicesDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Services Detail',
  })


  renderServices = (item, index) =>
    item.type === 'text' ?
      <View key={index} style={index % 2 === 0 ? styles.darkParagraphsContainer : styles.paragraphsContainer}>
        <View style={styles.paragraphsCon}>
          <Text style={styles.textParagraph}>{item.value[this.props.language]}</Text>
        </View>
        <Ionicons name="md-arrow-round-forward" size={20} color={colors.lightBlue1}/>
      </View> :
    item.type === 'headline' ?
      <View key={index} style={styles.headlineContainer}>
        <Text style={styles.headline}>{item.value[this.props.language]}</Text>
        <Text style={styles.headlineShadow}>{item.value[this.props.language]}</Text>
      </View> :
    null;

  render(){
    const { services } = this.props;
    return (
      <ScrollView style={styles.container}>
        {services.paragraphs.map(this.renderServices)}
      </ScrollView>
    );
  }
}

ServicesDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  services: state.servicesReducer.services,
  language: state.settingsReducer.language
});

export default connect(stateToProps, null)(ServicesDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  headlineContainer: {
    marginHorizontal: metrics.large,
    marginTop: metrics.large
  },
  headline: {
    fontSize: fonts.size.huge,
    color: colors.black,
    fontFamily: 'openSansBold',
    marginLeft: metrics.huge,
  },
  headlineShadow: {
    fontSize: fonts.size.extraHuge,
    color: '#e7e8ea',
    fontFamily: 'openSansBold',
    lineHeight: 30,
    alignSelf: 'flex-start',
    textAlign: 'center'
  },
  paragraphsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f6fcfc',
    flexDirection: 'row',
    height: 90,
    padding: metrics.extraHuge,
  },
  darkParagraphsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 90,
    padding: metrics.extraHuge,
  },
  paragraphsCon: {
    width: Dimensions.get('window').width / 1.3,
  },
  textParagraph: {
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    color: '#595D65',
  }
});
