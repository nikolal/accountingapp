import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts } from '../../theme';
// import PropTypes from 'prop-types';

class TaxesDetail extends Component {

  state={
    inputText: ''
  }

  updateSearchText = (x) => this.setState({ searchText: x });

  static navigationOptions = ({ navigation }) => ({
    title: 'TAXES DETAIL',
  })

  renderArticle = (item, index) =>
    <View key={index }style={styles.oneParagraph}>
      <Text>{item.text}</Text>
      <Text style={styles.percentage}>{item.percentage}</Text>
    </View>

  render(){
    const { article } = this.props;
    // const { searchText } = this.state;

    // const searchCompetitions = competitions // eslint-disable-line
    // .filter(x => x.country.toLowerCase().indexOf(searchText.toLowerCase()) >= 0)
    // .filter((x, i) => i < 70);

    return (
      <ScrollView atyle={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>{article.title}</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={this.updateSearchText}
            value={this.state.inputText}
          />
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
  titleText: {
    marginBottom: metrics.extraHuge,
    alignSelf: 'center',
    fontSize: fonts.size.huge,
    fontWeight: 'bold'
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: metrics.smallBorder,
    marginHorizontal: metrics.medium
  },
  oneParagraph: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.black,
    borderBottomWidth: metrics.smallBorder,
    marginHorizontal: metrics.large,
    paddingVertical: metrics.huge
  },
  percentage: {
    fontWeight: fonts.weight.large
  }
});
