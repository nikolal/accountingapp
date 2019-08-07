import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveServices } from './ServicesContainer.js';
import HeaderTitle from './HeaderTitle.js';
import { metrics, colors, fonts, images } from '../../theme';

class Services extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle />
  });

  goToServicesDetail = (screenName, services) => {
    this.props.saveServices(services);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToServicesDetail('ServicesDetail', item)} style={index % 2 === 0 ? styles.darkItem : styles.item}>
      <View style={styles.imageTitleContainer}>
        <View style={styles.iconCircleContainer}>
          <Image source={item.icon} style={styles.icon}/>
        </View>
        <View style={styles.titleSubTitleContainer}>
          <Text style={styles.titleText}>{item.title[this.props.language]}</Text>
          <Text style={styles.subTitleText}>{item.subTitle[this.props.language]}</Text>
        </View>
      </View>
    </TouchableOpacity>

  render() {
    // console.log(this.props.headerTitle);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.longLineContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={images.hlbServicesPhoto}
            />
            <Text style={styles.textDescription}>{this.props.description[this.props.language]}</Text>
          </View>
        </View>
        {this.props.ourServices.map(this.renderList)}
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  ourServices: state.servicesReducer.ourServices,
  language: state.settingsReducer.language,
  description: state.servicesReducer.description,
  headerTitle: state.servicesReducer.headerTitle
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
  longLineContainer: {
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: metrics.tinyBorder,
    marginBottom: metrics.medium
  },
  imageContainer: {
    margin: metrics.medium,
  },
  image: {
    height: Dimensions.get('window').height / 3.2,
    borderRadius: 10,

  },
  textDescription: {
    alignSelf: 'center',
    fontSize: fonts.size.huge,
    fontFamily: 'openSansBold',
    color: colors.grey,
    marginVertical: metrics.huge,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.medium,
    alignItems: 'center',
    backgroundColor: colors.white
  },
  darkItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.medium,
    alignItems: 'center',
    backgroundColor: colors.veryLightGrey
  },
  imageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(202, 236, 239)',
    height: 50,
    width: 50,
    borderRadius: 25
  },
  icon: {
    width: metrics.large,
    height: metrics.large
  },
  titleSubTitleContainer: {
    flex: 1,
    marginHorizontal: metrics.large,
    paddingVertical: metrics.large,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9'
  },
  titleText: {
    fontSize: fonts.size.large,
    fontFamily: 'openSansRegular',
    color: colors.grey
  },
  subTitleText: {
    fontFamily: 'openSansLight',
  }
});
