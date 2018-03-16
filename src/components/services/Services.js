import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons }  from '@expo/vector-icons';
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
        <Image 
          style={styles.imageIcons}
          source={{ uri: item.image }}
        />
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <SimpleLineIcons
        name={item.icon}
        size={17}
        style={styles.arrowIcon}
      />
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://creditarmy.org/wp-content/uploads/2017/05/OurTeam.jpg' }}
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
    backgroundColor: colors.lightGrey,
  },
  innerContainer: {
    flex: 1,
    margin: metrics.medium,
    padding: metrics.medium,
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
  image: {
    height: Dimensions.get('window').height / 3.5,
  },
  textDescription: {
    alignSelf: 'center',
    fontSize: fonts.size.huge,
    fontWeight: 'bold',
    marginVertical: metrics.huge
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderBottomWidth: metrics.smallBorder,
    borderBottomColor: colors.grey,
    padding: metrics.small,
    marginBottom: metrics.small
  },
  imageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: fonts.size.medium
  },
  imageIcons: {
    margin: metrics.medium,
    width: 50, 
    height: 50
  },
  arrowIcon: {
    color: colors.black,
    right: metrics.small
  }
});
