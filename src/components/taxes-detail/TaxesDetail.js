import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts } from '../../theme';
// import PropTypes from 'prop-types';

class TaxesDetail extends Component {

  state={
    inputText: ''
  }

  updateSearchText = (x) => this.setState({ inputText: x });

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
    const { inputText } = this.state;

    const searchTaxes =  article.paragraphs
      .filter(x => x.text.toLowerCase().indexOf(inputText.toLowerCase()) >= 0);
      // .filter((x, i) => i < 70);

    return (
      <ScrollView atyle={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>{article.title}</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={this.updateSearchText}
            value={inputText}
          />
          <View style={styles.item}>
            {
              searchTaxes.lenght === 0 &&
                <ActivityIndicator
                  style={styles.activityIndicator}
                  size="small"
                  color={colors.black}
                  animating={article.paragraphs.length === 0}
                />
            }
            {
              article.paragraphs.length === 0 || inputText === 0
              ?
              <Text>There are no available taxes</Text>
              :
              article.paragraphs.map(this.renderArticle)
            }
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
