import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons }  from '@expo/vector-icons';
import { saveArticle } from './NewsContainer.js';
import { saveLanguage } from '../settings/SettingsContainer.js';
import { metrics, colors, fonts } from '../../theme';
import Modal from './Modal.js';

class News extends Component {

  state = {
    modalVisible: false
  }

  componentDidMount = () => {
    this.getLanguage();
  }

  getLanguage = () => {
    AsyncStorage.getItem('@accountingApp:ddddddd')
      .then(language => this.checkIfLanguageExist(language));
  }

  checkIfLanguageExist = language =>
    language ? this.setLanguage(language) : this.toggleModal(true);

  setLanguage = language => {
    this.props.saveLanguage(language);
    AsyncStorage.setItem('@accountingApp:ddddddd', language)
      .then(() => this.toggleModal(false));
  }

  toggleModal = bool => this.setState({ modalVisible: bool });

  goToNewsDetail = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToNewsDetail('NewsDetail', item)} style={styles.item}>
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.image }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText} numberOfLines={2}>{item.title}</Text>
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
        <Modal
          modalVisible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          setLanguage={this.setLanguage}
          languages={this.props.languages}
        />
        <View style={styles.innerContainer}>
          {this.props.news.map(this.renderList)}
        </View>
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  news: state.newsReducer.news,
  language: state.settingsReducer.language,
  languages: state.settingsReducer.languages
});

const dispatchToProps = dispatch => ({
  saveArticle: bindActionCreators(saveArticle, dispatch),
  saveLanguage: bindActionCreators(saveLanguage, dispatch)
});

export default connect(stateToProps, dispatchToProps)(News);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    padding: metrics.small,
  },
  innerContainer: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.small,
    padding: metrics.small,
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
    margin: metrics.medium,
  },
  titleText: {
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.large,
    marginBottom: metrics.medium,
  },
  dateText: {
    color: colors.grey,
    fontSize: fonts.size.small
  },
  arrowIcon: {
    right: metrics.small
  }
});
