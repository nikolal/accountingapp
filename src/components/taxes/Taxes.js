import React, { Component } from 'react';
import { ScrollView, View, ImageBackground, Text, TouchableOpacity, Button, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Feather }  from '@expo/vector-icons';
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
      <View style={styles.textArrowContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText} numberOfLines={1}>{item.title[this.props.language]}</Text>
          <Text style={styles.descriptionTitleText} numberOfLines={1}>{item.title[this.props.language]}</Text>
        </View>
        <Feather name="arrow-right" size={17} color={colors.lightBlue1}/>
      </View>
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={images.taxesImage}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.overlay} />
            <Text style={styles.textOverImage}>The idea that the police have retreated under siege will not go away.</Text>
            <Text style={styles.smallTextOverImage}>Shaila Dewan</Text>
          </ImageBackground>
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
    backgroundColor: colors.white
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 1.1,
    alignSelf: 'center',
    marginVertical: metrics.huge,
    justifyContent: 'center',
  },
  overlay: {
     ...StyleSheet.absoluteFillObject, // {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}
     backgroundColor: '#00000040',
     borderRadius: 10
   },
  textOverImage: {
    color: colors.white,
    fontSize: fonts.size.medium,
    fontFamily: 'openSansBold',
    marginHorizontal: metrics.huge,
  },
  smallTextOverImage: {
    color: colors.white,
    fontSize: fonts.size.smallToMedium,
    fontFamily: 'openSansRegular',
    marginLeft:metrics.huge,
  },
  darkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6FCFCFC',
    paddingHorizontal: metrics.extraHuge
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: metrics.white,
    paddingHorizontal: metrics.extraHuge
  },
  textArrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingVertical: metrics.huge,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
    // width: Dimensions.get('window').width / 2.7
  },
  textContainer: {
    flex: 1,
    // backgroundColor: 'yellow',
    // paddingVertical: metrics.huge,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E9E9E9',
    // width: Dimensions.get('window').width / 2.7
  },
  titleText: {
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
  },
  descriptionTitleText: {
    fontFamily: 'openSansLight',
    fontSize: fonts.size.small,
  },
});
