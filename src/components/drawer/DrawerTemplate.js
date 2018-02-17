import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SimpleLineIcons }  from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme';
// import { LinearGradient } from 'expo';


class DrawerTemplate extends Component {

  state = {
    drawerList: [
      { screen: 'Settings', icon: 'settings', name: 'Settings', arrow: 'arrow-right' },
      { screen: 'Tabs', icon: 'book-open', name: 'News', arrow: 'arrow-right' },
      { screen: 'About', icon: 'people', name: 'About', arrow: 'arrow-right' },
      { screen: 'Contact', icon: 'call-out', name: 'Contact', arrow: 'arrow-right' },
    ]
  };

  goToScreen = screen => this.props.navigation.navigate(screen);

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToScreen(item.screen)} style={styles.iconTextScreen}>
      <View style={styles.iconNameContainer}>
        <SimpleLineIcons name={item.icon} size={20} color="white" />
        <Text style={styles.textScreen}>{item.name}</Text>
      </View>
      <SimpleLineIcons style={styles.arrow} name={item.arrow} size={15} color="white" />
    </TouchableOpacity>

  render() {
    return (
      <View style={styles.container}>
{/*        <View style={{ backgroundColor: 'grey', flex: 1}} />
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: Dimensions.get('window').height
          }}
        />*/}
        <View style={styles.textLogoContainer}>
          <Text style={styles.logoText}>ACOUNTINGAPP</Text>
          <Text style={styles.logoText}>Welcome</Text>
        </View>
        <Image
          style={styles.image}
          source={{ uri: 'http://www.b-accounting.com/images/blog-accounting-2.jpg' }}
        />
        {this.state.drawerList.map(this.renderList)}
        <View style={styles.socialMediaContainer}>
          <SimpleLineIcons style={styles.socialMedia} name="social-facebook" size={15} color="white" />
          <SimpleLineIcons style={styles.socialMedia} name="social-instagram" size={15} color="white" />
          <SimpleLineIcons style={styles.socialMedia} name="social-twitter" size={15} color="white" />
          <SimpleLineIcons style={styles.socialMedia} name="envelope-letter" size={15} color="white" />
        </View>
      </View>
    );
  }
}

export default DrawerTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  textLogoContainer: {
    padding: metrics.huge,
    marginTop: metrics.extraHuge,
  },
  logoText: {
    color: colors.white,
    padding: metrics.small
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
    padding: metrics.large,
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
    marginLeft: metrics.medium
  },
  socialMediaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  socialMedia: {
    margin: metrics.medium
  }
});
