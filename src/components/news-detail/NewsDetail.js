import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const renderArticle = (item, index) =>
  item.type === 'text' ?
    <Text key={index}>{item.value}</Text> :
  item.type === 'image' ?
    <Image key={index} style={{width: 50, height: 50}} source={{uri: item.value}} /> :
  null;

const NewsDetail = (props) => {

  console.log(props.article);

  return (
    <View>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: props.article.image}}
      />
      <View>
        <Text>{props.article.title}</Text>
        <Text>{props.article.description}</Text>
        <Text>{props.article.date}</Text>
      </View>
      {props.article.paragraphs.map(renderArticle)}
    </View>
  );
};

NewsDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  article: state.newsReducer.article
});

export default connect(stateToProps, null)(NewsDetail);
