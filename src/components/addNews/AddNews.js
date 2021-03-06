import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, DatePickerIOS, StyleSheet, ScrollView, Dimensions, Constants } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
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
      date: '',
      image: 'https://best-wallpaper.net/wallpaper/1366x768/1201/Dream-clouds-on-the-mountain-and-the-planet_1366x768.jpg',
      link: '',
      linkRs: '',
      paragraphs: []
    },
    showDatePicker: false,
  }

  handleErr = () =>
    this.state.newsItem.author.rs.length === 0 ?
      'Unesite oblast' :
    this.state.newsItem.author.en.length === 0 ?
      'Please enter author' :
    this.state.newsItem.title.rs.length === 0 ?
      'Unesite naslov' :
    this.state.newsItem.title.en.length === 0 ?
      'Please enter title' :
    this.state.newsItem.description.rs.length === 0 ?
      'Unesite kratak opis' :
    this.state.newsItem.description.en.length === 0 ?
      'Please enter description'
    : false

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

  updateUrlLink = (text) => {
    this.setState({ newsItem: {
      ...this.state.newsItem,
      link: text
    }});
  }

  updateUrlLinkRs = (text) => {
    this.setState({ newsItem: {
      ...this.state.newsItem,
      linkRs: text
    }});
  }

  updateUrlLinkRs = (text) => {
    this.setState({ newsItem: {
      ...this.state.newsItem,
      linkRs: text
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
      date: date
    }});
  }

  addParagraph = type => {
    type === 'text' ?
      this.setState({ newsItem: {
        ...this.state.newsItem,
        paragraphs: [...this.state.newsItem.paragraphs,
          {id: this.state.newsItem.paragraphs.length + 1, type: 'text', value: {en: '', rs: ''}}]
      }})
    :
    type === 'subtitle' ?
      this.setState({ newsItem: {
        ...this.state.newsItem,
        paragraphs: [...this.state.newsItem.paragraphs,
          {id: this.state.newsItem.paragraphs.length + 1, type: 'subtitle', value: {en: '', rs: ''}}]
      }})
    :
    type === 'image' ?
      this.setState({ newsItem: {
        ...this.state.newsItem,
        paragraphs: [...this.state.newsItem.paragraphs,
          {id: this.state.newsItem.paragraphs.length + 1, type: 'image', value: 'nikola'}]
      }})
    : null;
  }

  updateParagraph = (text, item, index, lang, type) => {
    if ((lang && type === 'text') || (lang && type === 'subtitle')) {
        const newParagraphs = this.state.newsItem.paragraphs.slice(); //copy the array
        newParagraphs[index] = { // eslint-disable-line
          type: item.type,
          value: {
            ...this.state.newsItem.paragraphs[index].value,
            [lang]: text
          }
        };
        this.setState({ newsItem: {
          ...this.state.newsItem,
          paragraphs: newParagraphs
        }});
    } else {
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
  }

  validateNews = () => {
    const { news } = this.props;
    !this.handleErr() ?
      this.submitNews() :
      alert(this.handleErr());
  }

  submitNews = () => {
    const { news } = this.props;
    database.ref(`news/${news.length}`).set(this.state.newsItem)
      .then(res => {
        alert('News added!');
      })
      .catch(err => {
        alert('Failed adding news');
      });
  }


  renderParagraphs = (item, index, lang, type) =>
    item.type === 'text' ?
      <React.Fragment key={index}>
        <TextInput
          multiline={true}
          style={styles.inputTextParagraph}
          onChangeText={(text) => this.updateParagraph(text, item, index, 'rs', 'text')}
          placeholder="Unesi tekst"
          placeholderTextColor="red"
          autoCorrect={false}
        />
        <TextInput
          // key={`${index}en`}
          multiline={true}
          style={styles.inputTextParagraph}
          onChangeText={(text) => this.updateParagraph(text, item, index, 'en', 'text')}
          placeholder="Add text"
          placeholderTextColor="red"
          autoCorrect={false}
        />
      </React.Fragment>
    :
    item.type === 'subtitle' ?
      <React.Fragment key={index}>
        <TextInput
          multiline={true}
          style={styles.inputTextParagraph}
          onChangeText={(text) => this.updateParagraph(text, item, index, 'rs', 'subtitle')}
          placeholder="Unesi podnaslov"
          placeholderTextColor="red"
          autoCorrect={false}
        />
        <TextInput
          // key={`${index}en`}
          multiline={true}
          style={styles.inputTextParagraph}
          onChangeText={(text) => this.updateParagraph(text, item, index, 'en', 'subtitle')}
          placeholder="Add subtitle"
          placeholderTextColor="red"
          autoCorrect={false}
        />
      </React.Fragment>
      :
      item.type === 'image' ?
        <TextInput
          key={index}
          style={styles.inputText}
          onChangeText={(text) => this.updateParagraph(text, item, index, null, 'image' )}
          placeholder="Link slike"
          placeholderTextColor="red"
          autoCorrect={false}
        />
      : null

  render() {
    console.log(this.state.newsItem);

    return (
      <View style={styles.containerHead}>
         <TouchableOpacity style={styles.submitButton} onPress={this.validateNews}>
            <Text style={styles.buttonText}>SUBMIT / POTVRDI</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.addParagraph('text')}><Text style={styles.buttonText}>Dodaj paragraf</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.addParagraph('subtitle')}><Text style={styles.buttonText}>Dodaj podnaslov</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.addParagraph('image')}><Text style={styles.buttonText}>Dodaj sliku</Text></TouchableOpacity>
          </View>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView
            behavior="padding"
          >
          <View>
            <Text style={styles.directionText}>Dodaj link vesti sa sajta</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateUrlLinkRs(text)}
              placeholder="  Link vesti sa sajta"
              placeholderTextColor={colors.tabGrey}
              autoCorrect={false}
            />
            <Text style={styles.directionText}>Add link</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateUrlLink(text)}
              placeholder="  Link vesti sa sajta"
              placeholderTextColor={colors.tabGrey}
              autoCorrect={false}
            />
            <Text style={styles.directionText}>Autor teksta</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateAuthor(text, 'rs')}
              placeholder="  Unesi autora"
              placeholderTextColor={colors.tabGrey}
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateAuthor(text, 'en')}
              placeholder="  Add Author"
              placeholderTextColor={colors.tabGrey}
              autoCorrect={false}
            />
            <Text style={styles.directionText}>Naslov teksta</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateTitle(text, 'rs')}
              placeholder="  Unesi naslov"
              placeholderTextColor={colors.tabGrey}
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateTitle(text, 'en')}
              placeholder="  Add headline"
              placeholderTextColor={colors.tabGrey}
              autoCorrect={false}
            />
            <Text style={styles.directionText}>Link slike</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateImage(text)}
              placeholder="  Link slike"
              placeholderTextColor={colors.tabGrey}
              autoCorrect={false}
            />
            <Text style={styles.directionText}>Kratak opis vesti</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateDescription(text, 'rs')}
              placeholder="  Unesi tekst"
              autoCorrect={false}
              placeholderTextColor={colors.tabGrey}
            />
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.updateDescription(text, 'en')}
              placeholder="  Add text"
              placeholderTextColor={colors.tabGrey}
              autoCorrect={false}
            />
          </View>
          <View >
            <DatePicker
              date={this.state.date}
              mode="date"
              placeholder="Odaberi datum"
              format={
                this.props.language === 'en' ?
                  'MMMM-DD' : 'DD/MM/YYYY'
              }
              // minDate={componentData.settings.minValue}
              // maxDate={componentData.settings.maxValue}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              style={styles.datePicker}
              customStyles={{
                // dateText: this.componentStyles.dateText,
                dateInput: {
                  flex: 1,
                  borderWidth: 0,
                },
                btnTextConfirm: {
                  height: 20,
                  color: colors.lightBlue1,
                  fontWeight: 'bold'
                },
                btnTextCancel: {
                  height: 20,
                  color: 'red',
                },
                dateTouchBody: {
                  flex: 1,
                },
              }}
              onDateChange={this.updateDate}
            />
            {/* <TouchableOpacity
              style={styles.dateContainer}
              onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}>
              <Text style={styles.dateText}>{this.state.newsItem.createdAt}</Text>
            </TouchableOpacity>
            {showDatePicker} */}
          </View>
          {this.state.newsItem.paragraphs && this.state.newsItem.paragraphs.map(this.renderParagraphs)}
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
  datePicker: {
    flex: 1,
    backgroundColor: colors.lightBlue1,
    borderRadius: metrics.small,
    alignSelf: 'center',
    margin: metrics.medium
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: Dimensions.get('window').width / 3.5,
    backgroundColor: '#14B7C5',
    borderRadius: metrics. small,
    padding: metrics.small
  },
  submitButton: {
    backgroundColor: '#14B7C5',
    margin: metrics.small,
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
