import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Button, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons }  from '@expo/vector-icons';
import { saveArticle } from './TaxesContainer.js';
import { metrics, colors, fonts } from '../../theme';

class Taxes extends Component {

  goToTaxesDetails = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToTaxesDetails('TaxesDetail', item)} style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      <SimpleLineIcons
        name="arrow-right"
        size={25}
        color="black"
        style={styles.arrowIcon}
      />
      <View style={styles.overlay} />
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.taxes.map(this.renderList)}
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
    backgroundColor: colors.lightGrey
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgb(0, 87, 127)',
    borderBottomWidth: metrics.smallBorder,
    marginHorizontal: metrics.large,
    paddingVertical: metrics.huge
  },
  textContainer: {
    flex: 1,
    paddingLeft: metrics.small
  },
  titleText: {
    fontSize: fonts.size.huge,
    fontWeight: 'bold',
    // color: 'rgb(0, 87, 127)',
    marginBottom: metrics.small
  },
  dateText: {
    color: colors.grey,
  }
});
