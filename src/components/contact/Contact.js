import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';
import { SimpleLineIcons }  from '@expo/vector-icons';

import { MapView } from 'expo';
const { Marker } = MapView;


class Contact extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'HLB T&M Consulting',
  })

  goToContactMessage = screenName => {
    this.props.navigation.navigate(screenName);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
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
            <View style={styles.addressContainer}>
              <Text style={styles.addressText}>Mlatisumina 19, 11 000 Beograd</Text>
              <Text style={styles.addressText}>+381 11 344-81-69</Text>
              <Text style={styles.addressText}>+381 64 614-29-44</Text>
              <TouchableOpacity
                onPress={() => this.goToContactMessage('ContactMessage')}
                style={styles.addressTextMail}>
                <Text style={styles.contactText}>CONTACT US</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  innerContainer: {
    flex: 1,
    padding: metrics.medium,
    backgroundColor: colors.white
  },
  googleMapContainer: {
    height: Dimensions.get('window').height / 1.9,
  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
  },
  addressContainer: {
    alignItems: 'center',
  },
  addressText: {
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    color: colors.grey,
    marginBottom: metrics.small
  },
  addressTextMail: {
    backgroundColor: colors.lightBlue2,
    margin: metrics.medium,
    padding: metrics.medium,
    borderRadius: 10,
    // borderWidth: metrics.largeBorder,
    // borderColor: colors.lightBlue2

  },
  contactText: {
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.white,
  }
});
