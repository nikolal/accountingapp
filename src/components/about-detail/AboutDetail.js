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
      <Text key={index} style={styles.textParagraph}>  {item.value}</Text> :
    item.type === 'headline' ?
      <View key={index} style={styles.headlineContainer}>
        <Text style={styles.headline}>{item.value}</Text>
      </View> :
    item.type === 'image' ?
      <Image key={index} source={{uri: item.value}} /> :
    null;

  render(){
    const { article } = this.props;
    return (
      article.title === 'Our Team' || article.title === 'Our company' ?
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
        </ScrollView> :
      article.title === 'Our clients' ?
        <ScrollView style={styles.container}>
          <View style={styles.innerContainer}>
            <Text>iiiiii</Text>
          </View>
        </ScrollView> : 
      null
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
    backgroundColor: colors.lightGrey
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
    marginVertical: metrics.huge,
  },
  description: {
    fontSize: fonts.size.huge,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: metrics.huge,
    marginHorizontal: metrics.large
  },
  paragraphsContainer: {
    margin: metrics.medium
  },  
  headlineContainer: {
    backgroundColor: 'rgb(252, 234, 233)',
    borderBottomWidth: metrics.mediumBorder,
    borderBottomColor: colors.grey,
    borderRadius: 5,
    padding: metrics.small,
    marginRight: metrics.medium,
    marginBottom: metrics.medium
  },
  headline: {
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.large,
    color: colors.grey,
  },
  textParagraph: {
    marginHorizontal: metrics.medium,
    marginBottom: metrics.medium,
    fontSize: fonts.size.medium
  }
});
