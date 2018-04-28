import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Button, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Ionicons }  from '@expo/vector-icons';
import { saveArticle } from './TaxesContainer.js';
import { metrics, colors, fonts } from '../../theme';

class Taxes extends Component {

  goToTaxesDetails = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToTaxesDetails('TaxesDetail', item)} style={index % 2 === 0 ? styles.darkItem : styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      <View style={styles.iconCircle}>
        <Ionicons
          name="md-arrow-dropright"
          size={30}
          color={colors.lightBlue1}
          style={styles.arrowIcon}
        />
      </View>
      <View style={styles.overlay} />
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={{ height: Dimensions.get('window').height / 3.5, marginBottom: metrics.small, margin: metrics.medium }}
          source={{ uri: 'http://chimeiusa.com/wp-content/uploads/2017/06/How-to-Find-the-Best-Inventory-Management-Accounting-Software-for-Your-Small-Business-5-Questions-to-Ask-300x200.jpg' }}
        />
        {this.props.taxes.map(this.renderList)}
      </View>
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  taxes: state.taxesReducer.taxes
});

const dispatchToProps = dispatch => ({
  saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Taxes);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.veryLightGrey,
    padding: metrics.small,
  },
  innerContainer: {
    // padding: metrics.medium,
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
  darkItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    // borderBottomColor: colors.grey,
    // borderBottomWidth: metrics.smallBorder,
    paddingVertical: metrics.huge
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.veryLightGrey,
    // borderBottomColor: colors.grey,
    // borderBottomWidth: metrics.smallBorder,
    paddingVertical: metrics.huge
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: metrics.large
  },
  titleText: {
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.grey,
    marginBottom: metrics.small
  },
  dateText: {
    color: colors.lightBlue1,
    fontFamily: 'openSansRegular',
  },
  iconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: metrics.tiny,
    marginRight: metrics.large,
    width: 34,
    height: 34,
    borderColor: colors.lightGrey,
    borderWidth: metrics.mediumBorder,
    borderRadius: 17
  }
});
