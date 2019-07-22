import React, { Component } from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, AsyncStorage, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from '../../firebase/firebase.js';
import { saveArticle, saveNewsAction } from './NewsContainer.js';
import { saveLanguage, saveLocaleString } from '../settings/SettingsContainer.js';
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
    this.getLocaleString();
    this.setNewsListener();
  }

  // Set starting language
  getLanguage = () => {
    AsyncStorage.getItem('@accountingApp:language')
      .then(language => this.checkIfLanguageExist(language));
  }

  checkIfLanguageExist = language =>
    language ? this.setLanguage(language) : this.toggleModal(true);

  setLanguage = language => {
    this.props.saveLanguage(language);
    AsyncStorage.setItem('@accountingApp:language', language)
      .then(() => this.toggleModal(false));
  }

  // set starting localeString
  getLocaleString = () => {
    AsyncStorage.getItem('@accountingApp:localeString')
      .then(localeString => this.checkIfLocaleStringExist(localeString));
  }

  checkIfLocaleStringExist = localeString =>
    localeString ? this.setLocaleString(localeString) : false;

  setLocaleString = localeString => {
    this.props.saveLocaleString(localeString);
    AsyncStorage.setItem('@accountingApp:localeString', localeString);
  }

  toggleModal = bool => this.setState({ modalVisible: bool });

  goToNewsDetail = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  setNewsListener = () => {
    firebase.database().ref('news/').on('value', (snapshot) => {
      snapshot.val() ?
      this.props.saveNewsAction(snapshot.val())
      :
      this.props.saveNewsAction([]);

      // console.log(snapshot.val());
    });
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToNewsDetail('NewsDetail', item)}>
      {
        index === 0 ?
          <View style={styles.firstItem}>
            <ImageBackground
              style={styles.firstItemImage}
              source={{ uri: item.image }}
              blurRadius={5}
            >
            <View style={styles.textContainerFirstItem}>
              <Text style={styles.titleTextFirstItem} numberOfLines={2}>{item.title[this.props.language]}</Text>
              <Text style={styles.dateTextFirstItem}>{item.date}</Text>
            </View>

            </ImageBackground>

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
              <View style={styles.hlbContainer}>
                <Text style={styles.secondItem}>{item.author[this.props.language]}</Text>
                <Image source={images.share} style={styles.shareImage} />
              </View>
              <Text style={styles.titleText} numberOfLines={2}>{item.title[this.props.language]}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </View>
      }
    </TouchableOpacity>

  render() {
    // console.log(this.props.news);
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
  saveLocaleString: bindActionCreators(saveLocaleString, dispatch),
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
    alignItems: 'center'
  },
  textContainerFirstItem: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: metrics.hugeToExtrahuge,
  },
  titleTextFirstItem: {
    color: colors.white,
    fontSize: fonts.size.hugeToExtra,
    fontFamily: 'openSansBold'
  },
  authorFirstItem: {
    marginRight: metrics.tiny,
    color: '#189FAB',
    fontFamily: 'openSansBold',
    fontSize: fonts.size.large,
  },
  dateTextFirstItem: {
    marginLeft: metrics.tiny,
    color: '#189FAB',
    fontFamily: 'openSansBold',
    fontSize: fonts.size.medium,
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
  hlbContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  secondItem: {
    color: '#189FAB',
  },
  hlbConsultingText: {
    fontSize: 12,
    marginRight: metrics.extraHuge
  },
  shareImage: {
    height: metrics.medium,
    width: metrics.medium,
    marginLeft: metrics.huge,
    // alignSelf: 'flex-end'
  },
  dateText: {
    fontSize: fonts.size.tiny,
    color: '#189FAB',
  }
});
