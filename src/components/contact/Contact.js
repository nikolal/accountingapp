import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';
// import { SimpleLineIcons }  from '@expo/vector-icons';
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
            latitude: 44.8026777,
            longitude: 20.4779999,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
        >
          <Marker
            coordinate={{ latitude: 44.8026777, longitude: 20.4779999 }}
            title="aaa"
            // description={marker.descriptio}
          />
        </MapView>
        <View style={styles.body}>
          <Text style={styles.title}>HLB T&M Consulting</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>Mlatisumina 19, 11 000 Beograd</Text>
            <View style={styles.innerAdressText}>
              <Text style={styles.addressText}>+381 11 344-81-69</Text>
            </View>
            <Text style={styles.addressText}>+381 64 614-29-44</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.goToContactMessage('ContactMessage')}
            style={styles.addressTextMail}>
            <Text style={styles.contactText}>Contact us</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Contact;

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
