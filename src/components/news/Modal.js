import React, { Component } from 'react';
import { ScrollView, Dimensions, Modal, View, Text, PixelRatio, TouchableOpacity, StyleSheet, AsyncStorage, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { metrics, colors, fonts, images } from '../../theme';
import { Ionicons }  from '@expo/vector-icons';
import { saveLanguage, saveLocaleString, saveAdmin } from '../settings/SettingsContainer.js';


class MyModal extends Component {

  setLanguage = language => {
    console.log(language);
    this.props.saveLanguage(language);
    AsyncStorage.setItem('@accountingApp:language', language);
  };

  setLocaleString = localeString => {
    console.log(localeString);
    this.props.saveLocaleString(localeString);
    AsyncStorage.setItem('@accountingApp:localeString', localeString);
  };

  renderLanguages = (item, index) =>
    <TouchableOpacity
      style={styles.nameContainer} key={item.name}
      onPress={() => {
        this.setLanguage(item.value);
        this.setLocaleString(item.localeString);

      }}>
      <Image
        style={{width: 24, height: 16}}
        source={item.flag}
      />
      <Text style={styles.name}>{item.name}</Text>
      {
        item.value === this.props.language &&
          <Ionicons style={styles.checkmark} name="ios-checkmark" size={30} color={colors.black}/>
      }
    </TouchableOpacity>;

render(){

  // console.log(this.props.modalVisible);

  return (
    <View style={styles.container}>
      <Modal
        visible={this.props.modalVisible}
        animationType={'fade'}
        onRequestClose={() => false}
      >
        <ImageBackground source={images.drawerBackground} style={styles.container} resizeMode="cover">
          <View style={styles.logoImageContainer}>
            <Image source={images.logoImage} style={styles.logoImage} />
          </View>
          <Text style={styles.text}>Choose language / Izaberite jezik</Text>
          <View style={styles.innerContainer}>
            {this.props.languages.map(this.renderLanguages)}
          <Text style={styles.textChange}>* You can always change your App language.</Text>
          <TouchableOpacity style={styles.buttonProceedWhite}
            onPress={
              () => {
                this.setLanguage(this.props.language);
                this.setLocaleString(this.props.localeString);
                this.props.toggleModal(false);
              }
            }>
            <Image source={images.buttonProceedWhite} style={styles.buttonProceedWhite}/>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>
    </View>
  );
}
}

const stateToProps = state => ({
  languages: state.settingsReducer.languages,
  language: state.settingsReducer.language,
  localeString: state.settingsReducer.localeString
});

const dispatchToProps = dispatch => ({
  saveLanguage: bindActionCreators(saveLanguage, dispatch),
  saveLocaleString: bindActionCreators(saveLocaleString, dispatch),
});

export default connect(stateToProps, dispatchToProps)(MyModal);

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
