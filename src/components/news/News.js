import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from '../../firebase/firebase.js';
import { Ionicons }  from '@expo/vector-icons';
import { saveArticle, saveNewsAction } from './NewsContainer.js';
import { saveLanguage } from '../settings/SettingsContainer.js';
import { metrics, colors, fonts } from '../../theme';
import Modal from './Modal.js';

class News extends Component {

  state = {
    modalVisible: false
  }

  componentDidMount = () => {
    this.getLanguage();
    this.setNewsListener();
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

  setNewsListener = () => {
    firebase.database().ref('news/').on('value', (snapshot) => {
      this.props.saveNewsAction(snapshot.val());
      // console.log(snapshot.val());
    });
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToNewsDetail('NewsDetail', item)} style={styles.item}>
      <View>
        <Image
          style={{ width: 80, height: 80 }}
          source={{ uri: item.image }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>

      <View style={styles.iconCircle}>
        <Ionicons
          name="md-arrow-dropright"
          size={30}
          color={colors.lightBlue1}
          style={styles.arrowIcon}
        />
      </View>
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
  saveLanguage: bindActionCreators(saveLanguage, dispatch),
  saveNewsAction: bindActionCreators(saveNewsAction, dispatch)

});

export default connect(stateToProps, dispatchToProps)(News);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: metrics.small,
  },
  innerContainer: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: metrics.mediumBorder,
    padding: metrics.medium,
    backgroundColor: colors.white,
  },
  textContainer: {
    flex: 1,
    flexWrap: 'wrap',
    padding: metrics.small,
    margin: metrics.medium,
  },
  titleText: {
    color: colors.grey,
    fontSize: fonts.size.medium,
    fontFamily: 'openSansBold',
    marginBottom: metrics.medium,
  },
  dateText: {
    color: colors.lightBlue1,
    fontSize: fonts.size.small,
    fontFamily: 'openSansRegular',
  },
  iconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: metrics.tiny,
    width: 34,
    height: 34,
    borderColor: colors.lightGrey,
    borderWidth: metrics.mediumBorder,
    borderRadius: 17
  }
});
