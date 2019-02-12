import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { metrics, colors, fonts } from '../../theme';
import HeaderTitle from './HeaderTitle.js';

import { MapView } from 'expo';
const { Marker } = MapView;


class Contact extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle />
  });

  goToContactMessage = screenName => {
    this.props.navigation.navigate(screenName);
  }

  render(){
    return (
      <View style={styles.container}>
        <MapView
          style={styles.googleMapContainer}
          initialRegion={{
            latitude: 44.7977904,
            longitude: 20.4733366,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
        >
          <Marker
            coordinate={{ latitude: 44.7977904, longitude: 20.4755253 }}
            title="aaa"
            // description={marker.descriptio}
          />
        </MapView>
        <View style={styles.body}>
          <Text style={styles.title}>HLB Consulting</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>Cara Nikolaja II 11/2, 11 000 Beograd</Text>
            <View style={styles.innerAdressText}>
              <Text style={styles.addressText}>+381 11 344-81-69 / +381 64 614-29-44</Text>
            </View>
            <Text style={styles.addressText}>office@tmconsulting.co.rs</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.goToContactMessage('ContactMessage')}
            style={styles.addressTextMail}>
            {
              this.props.language === 'rs' ?
              <Text style={styles.contactText}>Kontaktirajte nas</Text> :
              <Text style={styles.contactText}>Contact us</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const stateToProps = state => ({
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  // saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Contact);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  googleMapContainer: {
    height: Dimensions.get('window').height / 2.8,
  },
  body: {
    flex: 1,
    backgroundColor: colors.white,
    // justifyContent: 'space-around',
  },
  title: {
    alignSelf: 'center',
    fontSize: fonts.size.huge,
    fontFamily: 'openSansBold',
    color: 'rgb(20,32,52)',
    margin: metrics.huge,
  },
  addressContainer: {
    marginHorizontal: metrics.extraHuge,
  },
  addressText: {
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    padding: metrics.medium,
  },
  innerAdressText: {
    borderTopColor: 'rgb(235,235,235)',
    borderTopWidth: metrics.tinyBorder,
    borderBottomColor: 'rgb(235,235,235)',
    borderBottomWidth: metrics.tinyBorder,
  },
  addressTextMail: {
    top: 25,
    backgroundColor: '#14B7c5',
    margin: metrics.large,
    padding: metrics.medium,
    borderRadius: 5,
  },
  contactText: {
    alignSelf: 'center',
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    color: colors.white,
  }
});
