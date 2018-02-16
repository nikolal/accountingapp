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
      <Text key={index} style={styles.articleParagraphs}>{item.value}</Text> :
    item.type === 'image' ?
      <Image key={index} style={styles.image} source={{uri: item.value}} /> :
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
            <View style={styles.dateTimeContainer}>
              <Text style={styles.titleText}>{article.title}</Text>
              <Text style={styles.dateText}>{article.date}</Text>
            </View>
          </View>
          <Text style={styles.descriptionText}>{article.description}</Text>
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
      // height: Dimensions.get('window').height / 4,
  },
  coverImage: {
    height: Dimensions.get('window').height / 3.5,
  },
  dateTimeContainer: {
    position: 'absolute',
    bottom: metrics.small,
    left: metrics.small
  },
  titleText: {
    color: colors.white,
    fontSize: fonts.size.huge,
    fontWeight: fonts.weight.large,
    marginBottom: metrics.small,
  },
  dateText: {
    color: colors.white,
    fontSize: fonts.size.small,
    marginBottom: metrics.small,
  },
  descriptionText: {
    fontSize: fonts.size.small,
    fontWeight: fonts.weight.large,
    marginVertical: metrics.small
  },
  articleParagraphs: {
    marginBottom: metrics.small
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    marginBottom: metrics.small
  }
});
