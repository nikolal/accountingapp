import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
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
      <Image
        resizeMode="cover"
        style={styles.taxesImages}
        source={{ uri: item.image }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText} numberOfLines={3}>{item.title}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      <SimpleLineIcons
        name="arrow-right"
        size={25}
        color="white"
        style={styles.arrowIcon}
      />
      <View style={styles.overlay} />
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.itemsContainer}>
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
  },
  itemsContainer: {
    flex: 1,
  },
  item: {
    height: 150,
    margin: metrics.small,
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
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0
  },
  taxesImages: {
    height: 150,
  },
  textContainer: {
    position: 'absolute',
    zIndex: 2,
    margin: metrics.medium
  },
  titleText: {
    fontSize: fonts.size.huge,
    fontWeight: 'bold',
    color: colors.white,
  },
  dateText: {
    color: colors.white,
  },
  arrowIcon: {
    position: 'absolute',
    right: 0,
    bottom: 75,
    zIndex: 2
  }
});


