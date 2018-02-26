import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts } from '../../theme';
// import PropTypes from 'prop-types';

class TaxesDetail extends Component {

  state={
    inputText: ''
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'TAXES DETAIL',
  })

  renderArticle = (item, index) =>
    <View key={index }style={styles.oneParagraph}>
      <Text>{item.text}</Text>
      <Text>{item.percentage}</Text>
    </View>

  render(){
    const { article } = this.props;
    return (
      <ScrollView atyle={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={(inputText) => this.setState({inputText})}
            value={this.state.inputText}
          />
          <View style={styles.dateTitleContainer}>
            <Text>{article.title}</Text>
            <Text>{article.date}</Text>
          </View>
          <View style={styles.item}>
            {article.paragraphs.map(this.renderArticle)}
          </View>
        </View>
      </ScrollView>
    );
  }
}

TaxesDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  article: state.taxesReducer.article
});

export default connect(stateToProps, null)(TaxesDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    margin: metrics.medium,
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
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: metrics.smallBorder
  },
  oneParagraph: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
