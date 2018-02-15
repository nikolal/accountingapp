import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveArticle } from './NewsContainer.js';
import { metrics, colors, fonts } from '../../theme';

class News extends Component {

  goToNewsDetail = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToNewsDetail('NewsDetail', item)} style={styles.item}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: item.image }}
      />
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.date}</Text>
      </View>
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.news.map(this.renderList)}
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  news: state.newsReducer.news
});

const dispatchToProps = dispatch => ({
  saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(News);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: metrics.medium
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.small
  },
  text: {
    fontSize: fonts.size.medium,
    marginLeft: metrics.medium
  }
});
