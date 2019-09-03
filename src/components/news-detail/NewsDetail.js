import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Share } from 'react-native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts, images } from '../../theme';
import { Feather }  from '@expo/vector-icons';
import HeaderTitle from './HeaderTitle.js';


class NewsDetail extends Component {


  share = () => {
    Share.share({
      message: 'HLB consulting',
      url: this.props.article.link,
      title: ''
    }, {
      // Android only:
      dialogTitle: 'HLB consulting',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    });
  }

  // static navigationOptions = ({ navigation }) => ({
  //   headerTitle: <HeaderTitle />
  // })

  renderArticle = (item, index) =>
    item.type === 'text' ?
      <Text key={index} style={styles.articleParagraphsContainer}>
        <Text style={styles.articleParagraphs}>{item.value[this.props.language]}</Text>
      </Text> :
      item.type === 'subtitle' ?
        <Text key={index} style={styles.articleSubtitleContainer}>
          <Text style={styles.articleSubtitle}>{item.value[this.props.language]}</Text>
        </Text> :
    item.type === 'image' ?
      <View key={index} style={styles.imageContainer}>
        <Image style={styles.articleImage} source={{uri: item.value}} />
      </View> :
    null;

  render(){
    const { article } = this.props;
    // console.log(article.description);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.descriptionText} ellipsizeMode="tail">{article.description[this.props.language]}</Text>
        <View style={styles.dateSocialIconContainer}>
          <Text style={styles.dateText}>{article.date}</Text>
          <TouchableOpacity onPress={this.share} style={styles.sharingOpacity}>
            <Feather style={styles.fbSocialIconsImage} onPress={this.share} name="share" size={20}/>
          </TouchableOpacity>
        </View>
        {article.paragraphs && article.paragraphs.map(this.renderArticle)}
        <Text />
        <Text />
        <Text />
        <Text />
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
    paddingTop: metrics.huge,
  },
  descriptionText: {
    color: colors.black,
    fontSize: fonts.size.huge,
    fontFamily: 'merriweatherBold',
    paddingHorizontal: metrics.large,
  },
  dateSocialIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.large,
    paddingVertical: metrics.small,
    marginVertical: metrics.large,
    borderTopWidth: metrics.tinyBorder,
    borderBottomWidth: metrics.tinyToSmall,
    borderColor: '#bdbdbd'
  },
  sharingOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: metrics.large,
    width: 50,
  },
  dateText: {
    color: '#3191cb',
    fontSize: fonts.size.small,
    fontFamily: 'merriweatherRegular',
  },
  author: {
    color: '#bdbdbd',
    fontSize: fonts.size.small,
    fontFamily: 'merriweatherRegular',
  },
  fbSocialIconsImage: {
    color: '#bdbdbd',
  },
  articleParagraphsContainer: {
    paddingHorizontal: metrics.medium,
    margin: metrics.small
  },
  articleSubtitleContainer: {
    paddingHorizontal: metrics.large,
    marginTop: metrics.huge,
    marginBottom: metrics.large,
  },
  articleParagraphs: {
    fontFamily: 'merriweatherRegular',
  },
  articleSubtitle: {
    fontFamily: 'merriweatherBold',
    fontSize: fonts.size.large,
  },
  imageContainer: {
    margin: metrics.medium
  },
  articleImage: {
    height: Dimensions.get('window').height / 3.2,
    borderRadius: 10
  }
});
