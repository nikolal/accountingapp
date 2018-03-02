import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts } from '../../theme';
import PropTypes from 'prop-types';

class AboutDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'ABOUT DETAIL',
  })

  renderArticle = (item, index) =>
    item.type === 'text' ?
      <Text key={index} style={styles.textParagraph}>{item.value}</Text> :
    item.type === 'headline' ?
      <Text key={index} style={styles.headline}>{item.value}</Text> :
    item.type === 'image' ?
      <Image key={index} source={{uri: item.value}} /> :
    null;

  render(){
    const { article } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={{uri: article.image}}
          />
          <Text style={styles.description}>{article.description}</Text>
          <View style={styles.paragraphsContainer}>
            {article.paragraphs.map(this.renderArticle)}
          </View>
        </View>
      </ScrollView>
    );
  }
}

AboutDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  article: state.aboutReducer.article
});

export default connect(stateToProps, null)(AboutDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: metrics.huge,
    marginBottom: metrics.extraHuge,
  },
  description: {
    fontSize: fonts.size.huge,
    fontWeight: 'bold',
    // alignSelf: 'center',
    margin: metrics.large
  },
  paragraphsContainer: {
  },
  headline: {
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.large,
    color: colors.grey
  },
  textParagraph: {
    margin: metrics.medium,
    fontSize: fonts.size.medium
  }
});
