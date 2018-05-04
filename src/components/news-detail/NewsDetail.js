import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';
import { EvilIcons, FontAwesome }  from '@expo/vector-icons';


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
        <Image style={styles.articleImage} source={{uri: item.value}} />
      </View> :
    null;

  render(){
    const { article } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.articleContainer}>
          <View style={styles.header}>
            <View style={styles.left}>
              <FontAwesome
                name="square"
                size={12}
                color={colors.lightBlue1}
                style={styles.square}
              />
              <Text style={styles.text}>News</Text>
          </View>
            <EvilIcons
              name="share-apple"
              size={35}
              color={colors.lightBlue1}
            />
          </View>
          <View style={styles.descriptionDateContainer}>
            <Text style={styles.descriptionText} ellipsizeMode={'tail'}>{article.description}</Text>
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
    backgroundColor: colors.veryLightGrey,
    padding: metrics.small,
  },
  articleContainer: {
    padding: metrics.large,
    backgroundColor: colors.white,
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: colors.grey,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    marginRight: metrics.small
  },
  text: {
    color: colors.lightBlue1,
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
  },
  articleImageContainer: {
    flex: 1,
    marginBottom: metrics.huge
  },
  articleImage: {
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
    color: colors.darkGrey,
    fontSize: fonts.size.hugeToExtra,
    fontFamily: 'openSansBold',
    alignSelf: 'center',
    marginBottom: metrics.extraHuge,
  },
  dateText: {
    alignSelf: 'flex-end',
    marginBottom: metrics.small,
    marginRight: metrics.medium,
    color: colors.lightBlue1,
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
  },
  articleParagraphsContainer: {
    marginVertical: metrics.small
  },
  imageContainer: {
    marginVertical: metrics.medium
  },
  firstLetter: {
    fontFamily: 'openSansBold',
    fontSize: fonts.size.huge,
    color: colors.darkGrey
  },
  articleParagraphs: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    color: colors.darkGrey,
    textAlign: 'center'
  }
});
