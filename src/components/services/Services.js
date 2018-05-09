import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Ionicons, Entypo }  from '@expo/vector-icons';
import { saveServices } from './ServicesContainer.js';
import { metrics, colors, fonts } from '../../theme';

class Services extends Component {

  goToServicesDetail = (screenName, services) => {
    this.props.saveServices(services);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToServicesDetail('ServicesDetail', item)} style={styles.item}>
      <View style={styles.imageTitleContainer}>
        <Entypo
          name={item.image}
          size={25}
          color={colors.lightBlue1}
        />
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <View style={styles.iconCircle}>
        <Ionicons
          name="md-arrow-dropright"
          size={30}
          color={colors.lightBlue1}
        />
      </View>
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/VAT-representative-Serbia.jpg' }}
          />
          <Text style={styles.textDescription}>Our Services Portfolio</Text>
          {this.props.ourServices.map(this.renderList)}
        </View>
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  ourServices: state.servicesReducer.ourServices
});

const dispatchToProps = dispatch => ({
  saveServices: bindActionCreators(saveServices, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Services);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
    margin: metrics.medium,
  },
  image: {
    height: Dimensions.get('window').height / 3.5,
  },
  textDescription: {
    alignSelf: 'center',
    fontSize: fonts.size.hugeToExtra,
    fontFamily: 'openSansBold',
    color: colors.grey,
    marginVertical: metrics.extraHuge
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderBottomWidth: metrics.smallBorder,
    borderBottomColor: colors.darkGrey,
    padding: metrics.large,
    marginBottom: metrics.small
  },
  imageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: metrics.medium,
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.grey
  },
  iconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: metrics.tiny,
    marginRight: metrics.medium,
    width: 34,
    height: 34,
    borderColor: colors.lightGrey,
    borderWidth: metrics.mediumBorder,
    borderRadius: 17
  }
});
