import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts, images } from '../../theme';
import { FontAwesome }  from '@expo/vector-icons';
import HeaderTitle from './HeaderTitle.js';


class NewsDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle />
  })

  renderArticle = (item, index) =>
    item.type === 'text' ?
      <Text key={index} style={styles.articleParagraphsContainer}>
        <Text style={styles.firstLetter}>{item.value[0]}</Text>
        <Text style={styles.articleParagraphs}>{item.value.slice(1)}</Text>
      </Text> :
    item.type === 'image' ?
      <View key={index} style={styles.imageContainer}>
        <Image style={styles.articleImage} source={{uri: item.value}} />
      </View> :
    null;

  render(){
    const { article } = this.props;
    console.log(article.description);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.descriptionText} ellipsizeMode="tail">{article.description[this.props.language]}</Text>
        <View style={styles.dateSocialIconContainer}>
          <Text style={styles.dateText}>{article.date}</Text>
          <FontAwesome style={styles.fbSocialIconsImage} name="facebook-f" />
          <Image style={styles.socialIconsImage} source={images.twit}/>
          <Image style={styles.socialIconsImage} source={images.g}/>
          <Image style={styles.socialIconsImage} source={images.share}/>
        </View>
        {article.paragraphs.map(this.renderArticle)}
      </ScrollView>
    );
  }
}

NewsDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  article: state.newsReducer.article,
  languages: state.settingsReducer.languages,
  language: state.settingsReducer.language,
});

export default connect(stateToProps, null)(NewsDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: metrics.huge
  },
  descriptionText: {
    color: colors.black,
    fontSize: fonts.size.huge,
    fontFamily: 'openSansBold',
    paddingHorizontal: metrics.large,
  },
  dateSocialIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.large,
    paddingRight: metrics.extraHuge,
    marginVertical: metrics.large,
    borderTopWidth: metrics.tinyBorder,
    borderBottomWidth: metrics.tinyBorder,
    borderColor: '#bdbdbd'
  },
  dateText: {
    color: '#3191cb',
    fontSize: fonts.size.small,
    fontFamily: 'openSansRegular',
  },
  fbSocialIconsImage: {
    color: '#bdbdbd',
  },
  socialIconsImage: {
    height: metrics.medium,
    width: metrics.large
  },
  articleParagraphsContainer: {
    padding: metrics.medium,
  },
  imageContainer: {
    margin: metrics.medium
  },
  articleImage: {
    height: Dimensions.get('window').height / 3.2,
    borderRadius: 10
  }
});
