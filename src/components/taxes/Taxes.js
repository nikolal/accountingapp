import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { SimpleLineIcons }  from '@expo/vector-icons';
import { saveArticle } from './TaxesContainer.js';
// import { metrics, colors, fonts } from '../../theme';

class Taxes extends Component {

  goToTaxesDetails = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToTaxesDetails('TaxesDetail', item)} style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText} numberOfLines={3}>{item.title}</Text>
        <Text style={styles.dateText}>{item.date}</Text>

      </View>
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
  }
});


