import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons, Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
import { saveArticle } from './SomethingContainer.js';
import HeaderTitle from './HeaderTitle.js';

class Incentives extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle />
  });

  goIncentiveDetail = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goIncentiveDetail('IncentivesDetail', item)} style={index % 2 === 0 ? styles.darkItem : styles.item}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={item.icon}/>
      </View>
      <View style={styles.titleSubTitleContainer}>
        <Text style={styles.titleText}>{item.title[this.props.language]}</Text>
        <Text style={styles.subTitleText}>{item.subTitle[this.props.language]}</Text>
      </View>
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageTitleContainer}>
          <Image
            style={styles.image}
            source={images.aboutCompanyPanel500px}
          />
          <Text style={styles.headline}>HLB T&M Consulting</Text>
        </View>
          {this.props.incentives.map(this.renderList)}
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  incentives: state.incentiveReducer.incentives,
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Incentives);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  imageTitleContainer: {
    alignItems: 'center',
    paddingTop: metrics.huge,
    backgroundColor: colors.white,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: metrics.tinyBorder
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 1.1,
    borderRadius: 10
  },
  headline: {
    color: '#142024',
    fontFamily: 'openSansBold',
    fontSize: fonts.size.huge,
    marginVertical: metrics.huge,
    alignSelf: 'flex-start',
    marginLeft: metrics.largeToHuge
  },
  descriptionText: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.small,
    color: colors.black,
    margin: metrics.large,
    marginBottom: metrics.extraHuge
  },
  darkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.large,
    backgroundColor: colors.veryLightGrey
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.large,
    backgroundColor: colors.white
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CaECEF',
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  icon: {
    height: 10,
    width: 10
  },
  titleSubTitleContainer: {
    flex: 1,
    // backgroundColor: 'red',
    paddingVertical: metrics.small,
    marginHorizontal: metrics.large,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9'
  },
  titleText: {
    fontSize: fonts.size.medium,
    fontFamily: 'openSansRegular',
    color: colors.grey,
    marginTop: metrics.medium
  },
  subTitleText: {
    fontSize: fonts.size.small,
    fontFamily: 'openSansRegular',
    marginBottom: metrics.medium
  }
});
