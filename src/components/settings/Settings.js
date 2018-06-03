import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { SimpleLineIcons }  from '@expo/vector-icons';
import { saveLanguage } from './SettingsContainer.js';
import { metrics, colors, fonts } from '../../theme';
import { LinearGradient } from 'expo';


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
    AsyncStorage.setItem('@accountingApp:ddddddd', language);
      // .then(() => this.closeSettings());
  }

  goToNews = screenName => this.props.navigation.navigate(screenName);

  renderLanguages = (item, index) =>
      <TouchableOpacity key={item.name} onPress={() => this.setLanguage(item.value)}>
        <View style={styles.nameContainer}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../../assets/icons/english.png')}
          />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: 'grey'}} />
          <LinearGradient
            colors={['rgb(13, 126, 194)', 'rgb(115, 192, 239)', 'rgb(201, 233, 252)']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: Dimensions.get('window').height
            }}
          />
          <Text style={styles.logoText}>HLB T&M Consulting</Text>
          <Text style={styles.text}>CHOOSE LANGUAGE / IZABERITE JEZIK</Text>
          <View style={styles.innerContainer}>
            {this.props.languages.map(this.renderLanguages)}
            <TouchableOpacity style={styles.button} onPress={() => this.goToNews('News')}>
              <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
            <Text style={styles.textChange}>* You can always change your App language.</Text>
          </View>
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
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: metrics.huge
  },
  logoText: {
    color: colors.white,
    fontSize: fonts.size.large,
    fontFamily: 'openSansRegular',
    alignSelf: 'center',
    marginBottom: metrics.large
  },
  text: {
    color: colors.white,
    fontSize: fonts.size.large,
    fontFamily: 'openSansRegular',
    alignSelf: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    borderColor: colors.white,
    borderWidth: metrics.tinyBorder,
    padding: metrics.medium,
    margin: metrics.large,
    borderRadius: 20,
  },
  name: {
    color: colors.white,
    fontSize: fonts.size.huge,
    fontFamily: 'openSansRegular',
    marginLeft: metrics.medium
  },
  button: {
    borderColor: colors.white,
    borderWidth: metrics.tinyBorder,
    padding: metrics.medium,
    margin: metrics.large,
    borderRadius: 20,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.white,
  },
  textChange: {
    color: colors.white,
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    alignSelf: 'center',
    marginTop: metrics.huge
  }
});
