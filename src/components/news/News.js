import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons }  from '@expo/vector-icons';
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
        style={{ width: 80, height: 80 }}
        source={{ uri: item.image }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
        <Text style={styles.dateText}>{item.date}</Text>

      </View>

      <SimpleLineIcons
        name="arrow-right"
        size={16}
        color="black"
        style={styles.arrowIcon}
      />

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
    backgroundColor: colors.lightGrey,
    padding: metrics.small,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.medium,
    padding: metrics.small,
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
  textContainer: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: metrics.medium,
  },
  titleText: {
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.large,
    marginBottom: metrics.tiny
  },
  descriptionText: {
    fontSize: fonts.size.small,
    marginBottom: metrics.tiny
  },
  dateText: {
    color: colors.grey,
    fontSize: fonts.size.tiny
  },
  arrowIcon: {
    position: 'absolute',
    right: 0
  }
});
