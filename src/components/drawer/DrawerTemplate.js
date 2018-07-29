import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import { SimpleLineIcons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';

class DrawerTemplate extends Component {

  state = {
    drawerList: [
      // { screen: 'MainScreen', icon: 'book-open', name: 'Main Screen', arrow: 'arrow-right' },
      { screen: 'Services', icon: 'docs', nameEn: 'Our Services', nameRs: 'Naši servisi', arrow: 'arrow-right' },
      { screen: 'About', icon: 'info', nameEn: 'About Us', nameRs: 'O nama', arrow: 'arrow-right' },
      { screen: 'Contact', icon: 'call-out', nameEn: 'Contact', nameRs: 'Kontakt', arrow: 'arrow-right' },
      { screen: 'Settings', icon: 'settings', nameEn: 'Settings', nameRs: 'Podešavanja', arrow: 'arrow-right' }
    ]
  };

  goToScreen = screen => this.props.navigation.navigate(screen);

  goToContactMessage = screenName => {
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToScreen(item.screen)} style={styles.iconTextScreen}>
      <View style={styles.iconNameContainer}>
        <SimpleLineIcons name={item.icon} size={20} color="white" />
          {
            this.props.language === 'en' ?
              <Text style={styles.textScreen}>{item.nameEn}</Text> :
            this.props.language === 'rs' ?
              <Text style={styles.textScreen}>{item.nameRs}</Text> :
            null
          }
      </View>
      <SimpleLineIcons style={styles.arrow} name={item.arrow} size={15} color="white" />
    </TouchableOpacity>

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background} style={{ width: 280, height: Dimensions.get('window').height}}>
          <View style={styles.textLogoContainer}>
            <Text style={styles.logoText}>HLB T&M Consulting</Text>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Finance | Tax | Advisory</Text>
              </View>
          </View>
          <Image
            style={styles.image}
            source={{ uri: 'http://www.b-accounting.com/images/blog-accounting-2.jpg' }}
          />
          {this.state.drawerList.map(this.renderList)}
          <View style={styles.socialMediaContainer}>
            <SimpleLineIcons style={styles.socialMedia} name="social-facebook" size={20} color="white" />
            <SimpleLineIcons style={styles.socialMedia} name="social-instagram" size={20} color="white" />
            <SimpleLineIcons style={styles.socialMedia} name="social-linkedin" size={20} color="white" />
            <SimpleLineIcons onPress={() => this.goToContactMessage('ContactMessage')} style={styles.socialMedia} name="envelope-letter" size={20} color="white" />
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
  textLogoContainer: {
    padding: metrics.huge,
    marginTop: metrics.extraHuge,
  },
  logoText: {
    color: colors.white,
    fontSize: fonts.size.medium,
    fontFamily: 'openSansBold',
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
    fontSize: fonts.size.tiny,
    marginTop: metrics.tiny,
    marginRight: metrics.small,
    fontFamily: 'openSansBold',

  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: metrics.large,
    marginBottom: metrics.extraHuge,
  },
  iconTextScreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.large,
    paddingVertical: metrics.large,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: metrics.tinyBorder,
  },
  iconNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: metrics.medium,
  },
  textScreen: {
    color: colors.white,
    marginLeft: metrics.medium,
    fontFamily: 'openSansBold'
  },
  socialMediaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialMedia: {
    marginHorizontal: metrics.large,
  }
});
