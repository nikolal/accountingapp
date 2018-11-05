import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons, Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../../theme';
import { saveArticle } from './ContractAllContainer';
// import HeaderTitle from './HeaderTitle.js';

class ContractAll extends Component {

  // static navigationOptions = ({ navigation }) => ({
  //   headerTitle: <HeaderTitle />
  // });
  //
  goToContractCalculations = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToContractCalculations('ContractCalculations', item)}>
      <View style={styles.titleSubTitleContainer}>
        <Text style={styles.titleText}>{item.name[this.props.language]}</Text>
      </View>
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
          {this.props.contract.map(this.renderList)}
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  contract: state.contactAllReducer.contract,
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(ContractAll);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
