import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Button, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Ionicons }  from '@expo/vector-icons';
import { saveArticle } from './TaxesContainer.js';
import { metrics, colors, fonts, images } from '../../theme';
import HeaderTitle from './HeaderTitle.js';
// import { translations } from '../../translation.js';


class Taxes extends Component {

    static navigationOptions = ({ navigation }) => ({
      headerTitle: <HeaderTitle />
    });

  goToTaxesDetails = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToTaxesDetails('TaxesDetail', item)} style={index % 2 === 0 ? styles.darkItem : styles.item}>
      <Image
        style={{width: 50, height: 50, borderRadius: 25}}
        source={{uri: 'https://c.s-microsoft.com/en-us/CMSImages/DevicesBusiness_newimage_1_3up_V1.jpg?version=6d9348ca-7cac-6af6-30c6-177ed07c1a65'}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText} numberOfLines={2}>{item.title[this.props.language]}</Text>
        <Text style={styles.descriptionTitleText} numberOfLines={2}>{item.title[this.props.language]}</Text>
      </View>
      <View style={styles.dateTimeContainer}>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.dateText}>{item.time}</Text>
      </View>
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={images.backgroundImage}
          />
          <Text style={styles.textOverImage}>The idea that the police have retreated under siege will not go away.</Text>
          <Text style={styles.smallTextOverImage}>Shaila Dewan</Text>
        </View>
        {this.props.taxes.map(this.renderList)}
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  taxes: state.taxesReducer.taxes,
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Taxes);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: metrics.huge,
    backgroundColor: colors.white
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 1.1,
    borderRadius: 10
  },
  textOverImage: {
    position: 'absolute',
    top: 140,
    alignSelf: 'flex-start',
    color: colors.white,
    fontSize: fonts.size.medium,
    fontFamily: 'openSansBold',
    marginLeft:metrics.xxxHuge,
    marginRight: metrics.xxxHuge
  },
  smallTextOverImage: {
    position: 'absolute',
    top: 200,
    alignSelf: 'flex-start',
    color: colors.white,
    fontSize: fonts.size.smallToMedium,
    fontFamily: 'openSansRegular',
    marginLeft:metrics.xxxHuge,
  },
  darkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.veryLightGrey,
    padding: metrics.hugeToExtrahuge,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: metrics.white,
    padding: metrics.hugeToExtrahuge
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: metrics.large,
    width: Dimensions.get('window').width / 2.7
  },
  titleText: {
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
  },
  descriptionTitleText: {
    fontFamily: 'openSansLight',
    fontSize: fonts.size.small,
  },
  dateTimeContainer: {

  },
  dateText: {
    fontSize: fonts.size.tiny,
    fontFamily: 'openSansRegular',
  }
});
