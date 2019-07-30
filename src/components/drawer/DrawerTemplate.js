import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Linking, TouchableOpacity, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import { MaterialCommunityIcons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
import { NavigationActions } from 'react-navigation';


class DrawerTemplate extends Component {

  state = {
    drawerList: [
      { screen: 'Tabs', icon: 'book-open', nameEn: 'Home', nameRs: 'Pocetna', arrow: 'arrow-right' },
      { screen: 'Services', icon: 'domain', nameEn: 'Our Services', nameRs: 'Naše usluge', arrow: 'arrow-right' },
      { screen: 'About', icon: 'phone', nameEn: 'About us', nameRs: 'O nama', arrow: 'arrow-right' },
      { screen: 'Contact', icon: 'message-alert', nameEn: 'Contact', nameRs: 'Kontakt', arrow: 'arrow-right' },
      { screen: 'Settings', icon: 'settings', nameEn: 'Settings', nameRs: 'Podešavanja', arrow: 'arrow-right' }
    ],
    socialEn: 'Social',
    socialRs: 'Poveži se'
  };

  goToScreen = screen => {
    this.props.navigation.navigate(screen);
  }

  _linkPressed = (url) => Linking.openURL(url)

  // goToContactMessage = screenName => {
  //   this.props.navigation.navigate(screenName);
  // }

  openAdmin = () => {
    this.props.admin &&
      this.props.navigation.navigate('AddNews');
  }

  renderList = (item, index) => {
    const activeRoute = this.props.navigation.state.routes[0].routes.slice(-1)[0].routeName;

    return (
      <TouchableOpacity key={index} onPress={() => this.goToScreen(item.screen)} style={styles.iconTextScreen}>
        <View style={styles.iconNameContainer}>
          <MaterialCommunityIcons name={item.icon} size={13} color="black" />
            {
              this.props.language === 'en' ?
                <View style={styles.textScreenContainer}><Text style={[styles.textScreen, { color: item.screen === activeRoute ? 'rgb(65,231,255)' : 'white' }]}>{item.nameEn}</Text></View> :
              this.props.language === 'rs' ?
                <View style={styles.textScreenContainer}><Text style={[styles.textScreen, { color: item.screen === activeRoute ? 'rgb(65,231,255)' : 'white' }]}>{item.nameRs}</Text></View> :
              null
            }
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.drawerBackground} style={{ width: 280, height: Dimensions.get('window').height}}>
          <TouchableOpacity style={styles.drawerLogoContainer} onPress={this.openAdmin}>
            <Image
              // resizeMode="center"
              source={images.logoImage}
              style={styles.drawerLogo}
            />
          </TouchableOpacity>
          {this.state.drawerList.map(this.renderList)}
          <View style={styles.socialTextContainer}>
            {
              this.props.language === 'en' ?
                <Text style={styles.socialText}>{this.state.socialEn}</Text> :
              this.props.language === 'rs' ?
                <Text style={styles.socialText}>{this.state.socialRs}</Text> :
              null
            }
            <View style={styles.sosialIconsContainer}>
            <TouchableOpacity style={styles.touchableOpacitySocialContainer} onPress = {()=> this._linkPressed('https://www.facebook.com/hlbtmconsulting/?fref=ts')}>
              <MaterialCommunityIcons name="facebook" size={18} color="#00deff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacitySocialContainer} onPress = {()=> this._linkPressed('https://www.tmconsulting.co.rs/')}>
              <MaterialCommunityIcons name="google-plus" size={20} color="#00deff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacitySocialContainer} onPress = {()=> this._linkPressed('https://www.linkedin.com/company/hlb-consulting/')}>
              <MaterialCommunityIcons name="linkedin" size={18} color="#00deff" />
            </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const stateToProps = state => ({
  language: state.settingsReducer.language,
  admin: state.settingsReducer.admin
});

const dispatchToProps = dispatch => ({
  // saveServices: bindActionCreators(saveServices, dispatch)
});

export default connect(stateToProps, dispatchToProps)(DrawerTemplate);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between'
  },
  drawerLogoContainer: {
    // backgroundColor: 'red',
    marginTop: 80, // ako bude hteo da se prepravi
    marginBottom: metrics.extraHuge,
  },
  drawerLogo: {
    marginLeft: metrics.extraHuge,
    height: 70,
    width: Dimensions.get('window').width / 1.8,
  },
  iconTextScreen: {
    flexDirection: 'row',
  },
  iconNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: metrics.extraHuge,
  },
  textScreenContainer: {
    paddingVertical: metrics.huge,
    width: Dimensions.get('window').width / 1.8,
    borderColor: '#cccccc',
    borderBottomWidth: 0.9,
    // borderTopWidth: metrics.tinyBorder,
  },
  textScreen: {
    color: colors.white,
    marginLeft: metrics.medium,
    fontFamily: 'openSansBold'
  },
  socialTextContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: metrics.extraHuge
  },
  socialText: {
    color: colors.white,
    marginLeft: metrics.medium,
    fontFamily: 'openSansBold',
    marginBottom: metrics.large
  },
  touchableOpacitySocialContainer: {
    marginHorizontal: metrics.small,
    padding: metrics.large
  },
  sosialIconsContainer: {
    flexDirection: 'row'
  }
});
