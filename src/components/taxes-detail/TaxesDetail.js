import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts, images } from '../../theme';
import { FontAwesome }  from '@expo/vector-icons';
import HeaderTitle from './HeaderTitle.js';
// import PropTypes from 'prop-types';

class TaxesDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle />,
  })

  renderTaxes = (item, index) =>
    <View key={index} style={index % 2 === 0 ? styles.darkOneParagraph : styles.oneParagraph}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.text[this.props.language]}</Text>
        <Text style={styles.percentage}>{item.percentage[this.props.language]}</Text>
      </View>
      <View style={styles.dateContaioner}>
        <View style={styles.datIconContainer}>
          <Text style={styles.dateTimeText}>30.04.2018.</Text>
          <Image style={styles.icons} source={images.iconCalendarsmall}/>
        </View>
        <View style={styles.datIconContainer}>
          <Text style={styles.dateTimeText}>05:52PM</Text>
          <Image style={styles.icons} source={images.iconClocksmall} />
        </View>
      </View>
    </View>

  render(){
    const { article } = this.props;

    return (
      <ScrollView atyle={styles.container}>
        <View style={styles.item}>
          {
            article.paragraphs
              .map(this.renderTaxes)
          }
        </View>
      </ScrollView>
    );
  }
}

TaxesDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  article: state.taxesReducer.article,
  language: state.settingsReducer.language,
  date: state.settingsReducer.date
});

export default connect(stateToProps, null)(TaxesDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  oneParagraph: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 90
  },
  darkOneParagraph: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5fcfc',
    height: 90
  },
  textContainer: {
    padding: metrics.medium,
    paddingLeft: metrics.extraHuge,
    width: Dimensions.get('window').width / 1.4
  },
  text: {
    color: colors.grey,
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    marginBottom: metrics.tiny
  },
  percentage: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.small,
    color: '#0D7ec2'
  },
  datIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dateTimeText: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.small,
    color: '#878888',
    marginHorizontal: metrics.small,
  },
  icons: {
    height: metrics.medium,
    width: metrics.medium,
    marginLeft: metrics.small,
    marginHorizontal: metrics.small
  }
});
