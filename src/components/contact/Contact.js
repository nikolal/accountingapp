import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';
import { SimpleLineIcons }  from '@expo/vector-icons';

class Contact extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'CONTACT',
  })

  goToContactMessage = screenName => {
    this.props.navigation.navigate(screenName);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.googleMapContainer}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Serbia_1913.PNG/270px-Serbia_1913.PNG' }}
          />
          <View style={styles.body}>
            <View style={styles.addressContainer}>
              <Text style={styles.addressText}>Mlatisumina 19, 11 000 Beograd</Text>
              <Text style={styles.addressText}>office@tmconsulting.co.rs</Text>
              <Text style={styles.addressText}>+381 11 344-81-69</Text>
              <Text style={styles.addressText}>+381 64 614-29-44</Text>            
            </View>

            <TouchableOpacity onPress={() => this.goToContactMessage('ContactMessage')} style={styles.envelope}>
              <SimpleLineIcons name="envelope-open" size={40} color="grey" style={styles.arrowIcon} />
            </TouchableOpacity>
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
    backgroundColor: colors.lightGrey
  },
  innerContainer: {
    flex: 1,
    margin: metrics.medium,
    padding: metrics.medium,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  googleMapContainer: {
    height: Dimensions.get('window').height / 2,
  },
  body: {
    flex: 1,
    justifyContent: 'space-around'
  },
  addressContainer: {
    alignItems: 'center'
  },
  addressText: {
    fontSize: fonts.size.medium,
    color: colors.grey,
    marginBottom: metrics.small
  },
  envelope: {
    alignSelf: 'center'
  }
});
