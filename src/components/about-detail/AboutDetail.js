import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts } from '../../theme';
import PropTypes from 'prop-types';
import HeaderTitle from './HeaderTitle.js';

class AboutDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle />
  });


  renderArticle = (item, index) =>
    item.type === 'text' ?
      <Text key={index} style={styles.textParagraph}>{item.value[this.props.language]}</Text> :
    item.type === 'headline' ?
      <View key={index} style={styles.headlineContainer}>
        <Text style={styles.headline}>{item.value[this.props.language]}</Text>
      </View> :
    item.type === 'image' ?
      <Image key={index} source={{uri: item.value}} style={styles.clientsImage}/> :
    null;

  render(){
    const { article } = this.props;
    return (
      article.title === 'Our Team' || 'Naš tim' || article.title === 'Our company' || 'Naša kompanija' ?
        <ScrollView style={styles.container}>
            <Image
              style={styles.image}
              source={article.image}
            />
            <Text style={styles.description}>{article.description[this.props.language]}</Text>
            {article.paragraphs.map(this.renderArticle)}
        </ScrollView> :
      article.title === 'Our clients' || 'Naši klijenti' ?
        <ScrollView style={styles.container}>
          <View style={styles.innerContainerClients}>
            {article.paragraphs.map(this.renderArticle)}
          </View>
        </ScrollView> :
      null
    );
  }
}

AboutDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  article: state.aboutReducer.article,
  language: state.settingsReducer.language

});

export default connect(stateToProps, null)(AboutDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },

  innerContainerClients: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: metrics.medium,
    padding: metrics.medium,
    backgroundColor: colors.white,
  },
  image: {
    height: 145,
    width: 130,
    margin: metrics.huge,
  },
  description: {
    fontSize: fonts.size.huge,
    fontFamily: 'openSansBold',
    color: colors.black,
    marginHorizontal: metrics.large,
    marginBottom: metrics.huge,
  },
  headlineContainer: {
    backgroundColor: '#fcfcfc',
    borderBottomWidth: metrics.tinyBorder,
    borderTopWidth: metrics.tinyBorder,
    borderColor: '#E9E9E9',
    padding: metrics.large,
    paddingVertical: metrics.huge
  },
  headline: {
    fontSize: fonts.size.large,
    fontFamily: 'openSansRegular',
    color: colors.lightBlue1,
  },
  textParagraph: {
    marginHorizontal: metrics.large,
    marginVertical: metrics.medium,
    fontSize: fonts.size.small,
    fontFamily: 'openSansRegular',
  },
  clientsImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: metrics.large
  }
});
