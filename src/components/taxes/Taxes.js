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
      <View style={styles.innerContainer}>
        <Image
          style={{ height: Dimensions.get('window').height / 3.5, }}
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
    backgroundColor: colors.lightGrey,
    padding: metrics.small,
  },
  innerContainer: {
    marginTop: metrics.medium,
    padding: metrics.medium,
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.black,
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
