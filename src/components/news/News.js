import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, AsyncStorage, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from '../../firebase/firebase.js';
import { saveArticle, saveNewsAction } from './NewsContainer.js';
import { saveLanguage } from '../settings/SettingsContainer.js';
import { metrics, colors, fonts, images } from '../../theme';
import Modal from './Modal.js';
import HeaderTitle from './HeaderTitle.js';

class News extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle />
  });

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
    <TouchableOpacity key={index} onPress={() => this.goToNewsDetail('NewsDetail', item)}>
      {
        index === 0 ?
        <View style={styles.firstItem}>
          <Image
            style={styles.firstItemImage}
            source={{ uri: item.image }}
          />
          <View style={styles.textContainerFirstItem}>
            <Text style={styles.titleTextFirstItem} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.dateTextFirstItem}>{item.date}</Text>
          </View>
        </View>
         :
        <View style={styles.item}>
          <View style={styles.itemImageContainer}>
            <Image
              style={styles.itemImage}
              source={{ uri: item.image }}
            />
          </View>
          <View style={styles.textContainer}>
            <Image source={images.share} style={styles.shareImage} />
            <Text style={styles.titleText} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        </View>
      }
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
        {
          this.props.news.slice().reverse().map(this.renderList) //eslint-disable-line
        }
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
    // marginTop: 1
  },
  firstItemImage: {
    height: Dimensions.get('window').height / 3.5,
  },
  textContainerFirstItem: {
    position: 'absolute',
    paddingHorizontal: metrics.hugeToExtrahuge,
    top: 90,
    alignSelf: 'center'
  },
  titleTextFirstItem: {
    color: colors.white,
    fontSize: fonts.size.huge,
    fontFamily: 'openSansBold'
  },
  dateTextFirstItem: {
    color: '#189FAB',
    alignSelf: 'center',
    fontFamily: 'openSansBold'
  },
  item: {
    flexDirection: 'row',
    padding: metrics.medium,
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: metrics.tinyBorder,
    backgroundColor: colors.white
  },
  itemImage: {
    height: 115,
    width: 115
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: metrics.small,
    // backgroundColor: 'green',
    paddingLeft: metrics.medium,
  },
  shareImage: {
    height: metrics.smallToMedium,
    width: metrics.medium,
    // alignSelf: 'flex-end'
  },
  dateText: {
    fontSize: fonts.size.tiny
  }
});
