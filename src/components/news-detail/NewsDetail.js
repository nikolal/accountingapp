import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';


const NewsDetail = (props) => (
  <View>
    <Text>{props.article.title}</Text>
  </View>
);

NewsDetail.propTypes = { // eslint-disable-line

};

export default NewsDetail;
