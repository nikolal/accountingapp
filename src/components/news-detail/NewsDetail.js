import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NewsDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'NEWS DETAIL',
  })

  renderArticle = (item, index) =>
    item.type === 'text' ?
      <Text key={index}>{item.value}</Text> :
    item.type === 'image' ?
      <Image key={index} style={{width: 50, height: 50}} source={{uri: item.value}} /> :
    null;

  render(){
    const { article } = this.props;
    return (
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: article.image}}
        />
        <View>
          <Text>{article.title}</Text>
          <Text>{article.description}</Text>
          <Text>{article.date}</Text>
        </View>
        {article.paragraphs.map(this.renderArticle)}
      </View>
    );
  }
}

NewsDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  article: state.newsReducer.article
});

export default connect(stateToProps, null)(NewsDetail);
