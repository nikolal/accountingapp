import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { SimpleLineIcons }  from '@expo/vector-icons';
import { saveLanguage } from './SettingsContainer.js';
// import { metrics, colors, fonts } from '../../theme';

class Settings extends Component {

  componentDidMount = () => {
    this.getLanguage();
  }

  getLanguage = () => {
    AsyncStorage.getItem('@accountingApp:ddddddd')
      .then(language => this.setLanguage(language));
  }

  setLanguage = language => {
    this.props.saveLanguage(language);
    AsyncStorage.setItem('@accountingApp:ddddddd', language)
      // .then(() => this.closeSettings());
  }

  goToNews = screenName => this.props.navigation.navigate(screenName);

  renderLanguages = (item, index) => 
      <TouchableOpacity key={item.name} onPress={() => this.setLanguage(item.value)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>

  render() {
    console.log(this.props.language)
    return (
      <View>
        {this.props.languages.map(this.renderLanguages)}
        <TouchableOpacity onPress={() => this.goToNews('News')}>
          <Text>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const stateToProps = state => ({
  languages: state.settingsReducer.languages,
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  saveLanguage: bindActionCreators(saveLanguage, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Settings);

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // }
});


