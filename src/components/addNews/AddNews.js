import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, DatePickerIOS, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
// import { bindActionCreators } from 'redux';
// import { Entypo }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
// import HeaderTitle from './HeaderTitle.js';
//

class AddNews extends Component {

  state = {
    title: '',
    description: '',
    date: new Date(),
    showDatePicker: false,
    image: '',
    paragraphs: []
  }

  // static navigationOptions = ({ navigation }) => ({
  //   headerTitle: <HeaderTitle />
  // });

  goAboutDetail = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  updateTitle  = text => {
    this.setState({ title: text });
  }

  updateDescription= text => {
    this.setState({ description: text });
  }

  setDate = (newDate) => {
    this.setState({chosenDate: newDate});
  }

  addParagraph = type => {
    type === 'text' ?
      this.setState({ paragraphs: [...this.state.paragraphs, {id: this.state.paragraphs.length + 1, type: 'text', value: 'milana'}] })
    :
    type === 'image' ?
      this.setState({ paragraphs: [...this.state.paragraphs, {id: this.state.paragraphs.length + 1, type: 'image', value: 'nikola'}] })
    : null;
  }

  updateParagraph = (text, item, index) => {
    const newParagraphs = this.state.paragraphs.slice(); //copy the array
    newParagraphs[index] = { // eslint-disable-line
      type: item.type,
      value: text
    };
    this.setState({ paragraphs: newParagraphs });
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
      /> :
    item.type === 'image' ?
      <TextInput
        key={index}
        style={styles.inputText}
        onChangeText={(text) => this.updateParagraph(text, item, index)}
        placeholder="Link slike"
        placeholderTextColor="black"
      />
    : null

  render() {
    // console.log(this.state.date);
    // console.log(this.state.paragraphs);

    const showDatePicker = this.state.showDatePicker ?
      <DatePickerIOS
        style={{ height: 200 }}
        date={this.state.date} onDateChange={(date)=>this.setState({date})}
        mode="date"/> : <View />;

    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.directionText}>Unesi naslov</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => this.updateTitle(text)}
            placeholder=" Unesi tekst"
            placeholderTextColor="black"
          />
          <Text style={styles.directionText}>Kratak opis vesti</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => this.updateDescription(text)}
            placeholder=" Unesi tekst"
            placeholderTextColor="black"
          />
        </View>
        <View>
          <Text style={styles.directionText}>Odaberi datum</Text>
          <TouchableOpacity
            style={styles.dateContainer}
            onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}>
            <Text style={styles.dateText}>{moment(this.state.date).format('DD/MM/YYYY')}</Text>
          </TouchableOpacity>
          {showDatePicker}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.addParagraph('text')}><Text style={styles.textButton}>Dodaj tekst</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.addParagraph('image')}><Text style={styles.textButton}>Dodaj sliku</Text></TouchableOpacity>
        </View>
        {this.state.paragraphs.map(this.renderParagraphs)}
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  about: state.aboutReducer.about,
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  // saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(AddNews);

const styles = StyleSheet.create({
  container: {
  },
  directionText: {
    margin: metrics.small,
    marginTop: metrics.huge,
    color: colors.lightBlue1,
  },
  inputText: {
    height: 50,
    marginHorizontal: metrics.small,
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
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: colors.lightBlue1,
    borderWidth: metrics.mediumBorder,
    borderRadius: metrics. medium,
    margin: metrics.medium,
    padding: metrics.large
  }
});
