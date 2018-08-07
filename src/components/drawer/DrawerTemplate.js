import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import { MaterialCommunityIcons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';

class DrawerTemplate extends Component {

  state = {
    drawerList: [
      // { screen: 'MainScreen', icon: 'book-open', name: 'Main Screen', arrow: 'arrow-right' },
      { screen: 'Services', icon: 'domain', nameEn: 'Our Services', nameRs: 'Naši servisi', arrow: 'arrow-right' },
      { screen: 'About', icon: 'phone', nameEn: 'About Us', nameRs: 'O nama', arrow: 'arrow-right' },
      { screen: 'Contact', icon: 'message-alert', nameEn: 'Contact', nameRs: 'Kontakt', arrow: 'arrow-right' },
      { screen: 'Settings', icon: 'settings', nameEn: 'Settings', nameRs: 'Podešavanja', arrow: 'arrow-right' }
    ],
    socialEn: 'Social',
    socialRs: 'Poveži se'
  };

  goToScreen = screen => this.props.navigation.navigate(screen);

  // goToContactMessage = screenName => {
  //   this.props.navigation.navigate(screenName);
  // }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToScreen(item.screen)} style={styles.iconTextScreen}>
      <View style={styles.iconNameContainer}>
        <MaterialCommunityIcons name={item.icon} size={13} color="black" />
          {
            this.props.language === 'en' ?
              <View style={styles.textScreenContainer}><Text style={styles.textScreen}>{item.nameEn}</Text></View> :
            this.props.language === 'rs' ?
              <View style={styles.textScreenContainer}><Text style={styles.textScreen}>{item.nameRs}</Text></View> :
            null
          }
      </View>
    </TouchableOpacity>

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.drawerBackground} style={{ width: 280, height: Dimensions.get('window').height}}>
          <View style={styles.textLogoImageContainer}>
            <Image
              style={styles.image}
              source={{ uri: 'http://www.b-accounting.com/images/blog-accounting-2.jpg' }}
            />
            <View style={styles.logoTextContainer}>
              <Text style={styles.logoText}>HLB T&M Consulting</Text>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Finance | Tax | Advisory</Text>
              </View>
            </View>
          </View>
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
              <MaterialCommunityIcons style={styles.socialIcons} name="twitter" size={13} color="#00deff" />
              <MaterialCommunityIcons style={styles.socialIcons} name="facebook" size={15} color="#00deff" />
              <MaterialCommunityIcons style={styles.socialIcons} name="google-plus" size={15} color="#00deff" />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const stateToProps = state => ({
  language: state.settingsReducer.language,
});

const dispatchToProps = dispatch => ({
  // saveServices: bindActionCreators(saveServices, dispatch)
});

export default connect(stateToProps, dispatchToProps)(DrawerTemplate);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textLogoImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: metrics.huge,
    marginTop: metrics.extraHuge,
    marginBottom: metrics.huge
  },
  image: {
    height: 46,
    width: 46,
    borderRadius: 23,
    marginRight: metrics.large
  },
  logoTextContainer: {
    marginTop: metrics.huge
  },
  logoText: {
    color: colors.white,
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
  },
  textContainer: {
    paddingBottom: metrics.large,
    borderBottomColor: '#cccccc',
    borderBottomWidth: metrics.tinyBorder,
  },
  text: {
    color: colors.white,
    fontSize: fonts.size.tiny,
    marginTop: metrics.tiny,
    marginRight: metrics.small,
    fontFamily: 'openSansRegular',
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
    width: Dimensions.get('window').width / 1.7,
    borderColor: '#cccccc',
    borderBottomWidth: metrics.tinyBorder,
    borderTopWidth: metrics.tinyBorder,
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
  sosialIconsContainer: {
    flexDirection: 'row'
  },
  socialIcons: {
    marginHorizontal: metrics.huge,
  }
});
