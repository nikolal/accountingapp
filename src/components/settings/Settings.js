import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { SimpleLineIcons }  from '@expo/vector-icons';
import { saveLanguage } from './SettingsContainer.js';
import { metrics, colors, fonts } from '../../theme';

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
        <View style={styles.textCheckmarkContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Image
            style={styles.image}
            source={require('../../../assets/icons/checkmarkwhite.png')}
          />
        </View>
      </TouchableOpacity>

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.imageLogo}
            source={{ uri: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/VAT-representative-Serbia.jpg' }}
          />
          <Text style={styles.text}>Choose language / Izaberite jezik</Text>
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
    margin: metrics.large,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  imageLogo: {
    height: Dimensions.get('window').height / 4.5,
  },
  text: {
    color: colors.lightBlue1,
    fontSize: fonts.size.huge,
    fontFamily: 'openSansBold',
    alignSelf: 'center'
  },
  textCheckmarkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.small,
    borderBottomColor: colors.grey,
    borderBottomWidth: metrics.mediumBorder
  },
  name: {
    color: colors.grey,
    fontSize: fonts.size.huge,
    fontFamily: 'openSansBold',
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: metrics.medium
  },
  button: {
    backgroundColor: colors.lightBlue2,
    marginBottom: metrics.large,
    padding: metrics.medium,
    marginTop: metrics.large,
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.white,
  },
  textChange: {
    color: colors.grey,
    fontSize: fonts.size.large,
    fontFamily: 'openSansRegular',
    alignSelf: 'center'
  }
});
