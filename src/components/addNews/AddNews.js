import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, DatePickerIOS, StyleSheet, ScrollView, Dimensions, Constants } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import firebase from '../../firebase/firebase.js';
// import { bindActionCreators } from 'redux';
// import { Entypo }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
// import HeaderTitle from './HeaderTitle.js';
//
//
const database = firebase.database();

class AddNews extends Component {

  state = {
    newsItem: {
      author: {
        en: '',
        rs: '',
      },
      title: {
        en: '',
        rs: '',
      },
      description: {
        en: '',
        rs: '',
      },
      createdAt: moment(new Date()).format('DD/MM/YYYY'),
      image: 'https://best-wallpaper.net/wallpaper/1366x768/1201/Dream-clouds-on-the-mountain-and-the-planet_1366x768.jpg',
      paragraphs: []
    },
    showDatePicker: false,
  }

  // static navigationOptions = ({ navigation }) => ({
  //   headerTitle: <HeaderTitle />
  // });

  goAboutDetail = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  updateAuthor  = (text, lang) => {
    this.setState({ newsItem: {
      ...this.state.newsItem,
      author: {
        ...this.state.newsItem.author,
        [lang]: text
      }
    }});
  }

  updateTitle  = (text, lang) => {
    this.setState({ newsItem: {
      ...this.state.newsItem,
      title: {
        ...this.state.newsItem.title,
        [lang]: text
      }
    }});
  }

  updateImage = (text) => {
    this.setState({ newsItem: {
      ...this.state.newsItem,
      image: text
    }});
  }

  updateDescription = (text, lang) => {
    this.setState({ newsItem: {
      ...this.state.newsItem,
      description: {
        ...this.state.newsItem.description,
        [lang]: text
      }
    }});
  }

  updateDate = date => {
    this.setState({ newsItem: {
      ...this.state.newsItem,
      createdAt: date
    }});
  }

  addParagraph = type => {
    type === 'text' ?
      this.setState({ newsItem: {
        ...this.state.newsItem,
        paragraphs: [...this.state.newsItem.paragraphs, {id: this.state.newsItem.paragraphs.length + 1, type: 'text', value: 'milana'}]
      }})
    :
    type === 'image' ?
      this.setState({ newsItem: {
        ...this.state.newsItem,
        paragraphs: [...this.state.newsItem.paragraphs, {id: this.state.newsItem.paragraphs.length + 1, type: 'image', value: 'nikola'}]
      }})
    : null;
  }

  updateParagraph = (text, item, index) => {
    const newParagraphs = this.state.newsItem.paragraphs.slice(); //copy the array
    newParagraphs[index] = { // eslint-disable-line
      type: item.type,
      value: text
    };
    this.setState({ newsItem: {
      ...this.state.newsItem,
      paragraphs: newParagraphs
    }});
  }

  submitNews = () => {
    const { news } = this.props;
    console.log(this.state.newsItem);
    database.ref(`news/${news.length}`)
      .set(this.state.newsItem);
  }


  renderParagraphs = (item, index) =>
    item.type === 'text' ?
      <TextInput
        key={index}
        multiline={true}
        style={styles.inputTextParagraph}
        onChangeText={(text) => this.updateParagraph(text, item, index)}
        placeholder="Unesi tekst"
        placeholderTextColor="black"
        autoCorrect={false}
      /> :
    item.type === 'image' ?
      <TextInput
        key={index}
        style={styles.inputText}
        onChangeText={(text) => this.updateParagraph(text, item, index)}
        placeholder="Link slike"
        placeholderTextColor="black"
        autoCorrect={false}
      />
    : null

  render() {
    console.log(this.state.newsItem);

    const showDatePicker = this.state.showDatePicker ?
      <DatePickerIOS
        style={{ height: 200 }}
        date={this.state.newsItem.createdAt}
        onDateChange={(date) => this.updateDate(date)}
        mode="date"/> : <View />;

    return (
      <View style={styles.containerHead}>
         <TouchableOpacity style={styles.submitButton} onPress={this.submitNews}>
            <Text style={styles.buttonText}>SUBMIT / POTVRDI</Text>
            </TouchableOpacity>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView
            behavior="padding"
          >
          <View>
            <Text style={styles.directionText}>Autor teksta</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateAuthor(text, 'rs')}
              placeholder="  Unesi autora"
              placeholderTextColor="black"
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateAuthor(text, 'en')}
              placeholder="  Add Author"
              placeholderTextColor="black"
              autoCorrect={false}
            />
            <Text style={styles.directionText}>Naslov teksta</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateTitle(text, 'rs')}
              placeholder="  Unesi naslov"
              placeholderTextColor="black"
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateTitle(text, 'en')}
              placeholder="  Add headline"
              placeholderTextColor="black"
              autoCorrect={false}
            />
            <Text style={styles.directionText}>Link slike</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateImage(text)}
              placeholder="  Link slike"
              placeholderTextColor="black"
              autoCorrect={false}
            />
            <Text style={styles.directionText}>Kratak opis vesti</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateDescription(text, 'rs')}
              placeholder="  Unesi tekst"
              autoCorrect={false}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateDescription(text, 'en')}
              placeholder="  Add text"
              placeholderTextColor="black"
              autoCorrect={false}
            />
          </View>
          <View >
            <Text style={styles.directionText}>Odaberi datum</Text>
            <TouchableOpacity
              style={styles.dateContainer}
              onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}>
              <Text style={styles.dateText}>{this.state.newsItem.createdAt}</Text>
            </TouchableOpacity>
            {showDatePicker}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.addParagraph('text')}><Text style={styles.buttonText}>Dodaj paragraf</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.addParagraph('image')}><Text style={styles.buttonText}>Dodaj sliku</Text></TouchableOpacity>
          </View>
          {this.state.newsItem.paragraphs.map(this.renderParagraphs)}
        </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const stateToProps = state => ({
  about: state.aboutReducer.about,
  language: state.settingsReducer.language,
  news: state.newsReducer.news
});

const dispatchToProps = dispatch => ({
  // saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(AddNews);

const styles = StyleSheet.create({
  containerHead: {
    flex: 1
  },
  directionText: {
    alignSelf: 'center',
    margin: metrics.small,
    marginTop: metrics.huge,
    color: colors.lightBlue1,
    fontSize: fonts.size.large
  },
  inputText: {
    height: 50,
    margin: metrics.small,
    borderColor: 'rgb(141,141,141)',
    borderWidth: metrics.smallBorder,
    borderRadius: metrics.small,
    fontSize: fonts.size.small,
  },
  inputTextParagraph: {
    height: 150,
    margin: metrics.small,
    borderColor: 'rgb(141,141,141)',
    borderWidth: metrics.smallBorder,
    borderRadius: metrics.small,
    fontSize: fonts.size.small,
  },
  dateContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.medium,
    height: 30,
    width: Dimensions.get('window').width / 3,
    marginLeft: metrics.small,
    borderColor: 'rgb(141,141,141)',
    borderWidth: metrics.smallBorder,
    borderRadius: metrics.small,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    width: Dimensions.get('window').width / 3,
    backgroundColor: '#14B7C5',
    borderRadius: metrics. small,
    margin: metrics.medium,
    padding: metrics.medium
  },
  submitButton: {
    backgroundColor: '#14B7C5',
    margin: metrics.medium,
    padding: metrics.medium,
    borderRadius: metrics.small,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.medium,
    fontFamily: 'openSansBold',
    color: colors.white,
  },
});
