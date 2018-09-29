import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Text, PixelRatio, TouchableOpacity, StyleSheet, AsyncStorage, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Ionicons }  from '@expo/vector-icons';
import { saveLanguage, saveAdmin } from './SettingsContainer.js';
import { metrics, colors, fonts, images } from '../../theme';
// import { LinearGradient } from 'expo';


class Settings extends Component {

  static navigationOptions = {
    header: null,
  }

  state = {
    adminPassword: []
  }

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
    language === 'en' ?
      this.setState({
        adminPassword: [...this.state.adminPassword, 1]
      }) :
      this.setState({
        adminPassword: [...this.state.adminPassword, 3]
      });
      // .then(() => this.closeSettings());
  }

  resetAdminPassword = () => this.setState({
    adminPassword: []
  })

  submitPassward = () => {
    JSON.stringify(this.state.adminPassword) === JSON.stringify([3, 3, 3, 1, 3, 3, 3]) ?
    this.props.saveAdmin(true) : this.props.saveAdmin(false);
    this.props.navigation.navigate('News');
  }


  renderLanguages = (item, index) =>
      <TouchableOpacity style={styles.nameContainer} key={item.name} onPress={() => this.setLanguage(item.value)}>
        <Image
          style={{width: 24, height: 16}}
          source={item.flag}
        />
        <Text style={styles.name}>{item.name}</Text>
        {
          item.value === this.props.language &&
            <Ionicons style={styles.checkmark} name="ios-checkmark" size={30} color={colors.black}/>
        }
      </TouchableOpacity>

  render() {
    console.log(this.props.admin);
    return (
      <ImageBackground source={images.drawerBackground} style={styles.container} resizeMode="cover">
        <View style={styles.logoImageContainer}>
          <TouchableOpacity onPress={this.resetAdminPassword}>
            <Image source={images.logoImage} style={styles.logoImage} />
        </TouchableOpacity>
        </View>
        <Text style={styles.text}>Choose language / Izaberite jezik</Text>
        <View style={styles.innerContainer}>
          {this.props.languages.map(this.renderLanguages)}
          <Text style={styles.textChange}>* You can always change your App language.</Text>
          <TouchableOpacity style={styles.buttonProceedWhite} onPress={this.submitPassward}>
            <Image source={images.buttonProceedWhite} style={styles.buttonProceedWhite}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const stateToProps = state => ({
  languages: state.settingsReducer.languages,
  language: state.settingsReducer.language,
  admin: state.settingsReducer.admin
});

const dispatchToProps = dispatch => ({
  saveLanguage: bindActionCreators(saveLanguage, dispatch),
  saveAdmin: bindActionCreators(saveAdmin, dispatch),
});

export default connect(stateToProps, dispatchToProps)(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: metrics.large,
  },
  logoImageContainer: {
    marginTop: 94.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: '17.7%',
    backgroundColor:'#ffffff90',
  },
  logoImage: {
    opacity: 1.0,
    height: 177.26 / 2,
    width: 498.24 / 2
  },
  text: {
    marginVertical: metrics.extraHuge,
    color: colors.white,
    fontSize: fonts.size.large,
    fontFamily: 'openSansRegular',
    alignSelf: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff99',
    borderColor: '#408D8D8D',
    borderWidth: metrics.mediumBorder,
    height: 60,
    paddingHorizontal: metrics.huge,
    marginBottom: metrics.large,
    borderRadius: metrics.small
  },
  name: {
    color: colors.black,
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    marginLeft: metrics.medium
  },
  checkmark: {
    marginLeft: 'auto'
  },
  textChange: {
    color: colors.white,
    fontSize: fonts.size.small,
    fontFamily: 'openSansRegular',
    marginTop: metrics.tiny
  },
  buttonProceedWhite: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    width: 98,
    height: 98,
    borderRadius: 49,
  }
});
