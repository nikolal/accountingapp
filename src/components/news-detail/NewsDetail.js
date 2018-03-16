import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';


class NewsDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'NEWS DETAIL',
  })

  renderArticle = (item, index) =>
    item.type === 'text' ?
      <Text key={index} style={styles.articleParagraphsContainer}>
        <Text style={styles.firstLetter}>{item.value[0]}</Text>
        <Text style={styles.articleParagraphs}>{item.value.slice(1)}</Text>
      </Text> :
    item.type === 'image' ?
      <View key={index} style={styles.imageContainer}>
        <Image style={styles.coverImage} source={{uri: item.value}} />
      </View> :
    null;

  render(){
    const { article } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.articleContainer}>
          <View style={styles.coverImageContainer}>
            <Image
              resizeMode="cover"
              style={styles.coverImage}
              source={{uri: article.image}}
            />
          </View>
          <View style={styles.descriptionDateContainer}>
            <Text style={styles.descriptionText}>{article.description}</Text>
            <Text style={styles.dateText}>{article.date}</Text>
          </View>
          {article.paragraphs.map(this.renderArticle)}
        </View>

      </ScrollView>
    );
  }
}

NewsDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  article: state.newsReducer.article
});

export default connect(stateToProps, null)(NewsDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    padding: metrics.small,
  },
  articleContainer: {
    // alignItems: 'center',
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
  coverImageContainer: {
    flex: 1,
    marginBottom: metrics.huge
  },
  coverImage: {
    height: Dimensions.get('window').height / 3.5,
  },
  descriptionDateContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: metrics.huge,
    borderBottomColor: colors.grey,
    borderBottomWidth: metrics.smallBorder
  },
  descriptionText: {
    fontSize: fonts.size.large,
    fontWeight: 'bold',
    marginBottom: metrics.extraHuge,
  },
  dateText: {
    alignSelf: 'flex-end',
    marginBottom: metrics.small,
    marginRight: metrics.medium,
    color: colors.grey,
    fontSize: fonts.size.small,
  },
  articleParagraphsContainer: {
    marginVertical: metrics.small
  },
  imageContainer: {
    marginVertical: metrics.medium
  },
  firstLetter: {
  fontSize: fonts.size.huge,
  textShadowColor: colors.grey,
  fontWeight: 'bold'
  }
});
