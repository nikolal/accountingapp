import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


const NewsDetail = (props) => (
  <View>
    <Text>{props.article.title}</Text>
  </View>
);

NewsDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  article: state.newsReducer.article
});

export default connect(stateToProps, null)(NewsDetail);
