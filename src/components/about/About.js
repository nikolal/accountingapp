import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MaterialIcons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';
import { saveArticle } from './AboutContainer.js';
import HeaderTitle from './HeaderTitle.js';

class AboutUs extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle />
  });

  goAboutDetail = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goAboutDetail('AboutDetail', item)} style={index % 2 === 0 ? styles.darkItem : styles.item}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={item.icon}/>
      </View>
      <View style={styles.titleSubTitleContainer}>
        <Text style={styles.titleText}>{item.title[this.props.language]}</Text>
        <Text style={styles.subTitleText}>{item.subTitle[this.props.language]}</Text>
      </View>
      <MaterialIcons style={styles.shareImage} size={25} name="navigate-next" />
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
          {
            this.props.language === 'en' ?
              <Text style={styles.descriptionText}>We are one of the leading accounting and consulting firms in Serbia specialised to support international companies having business in Serbia. We have a strong professional team of accountants, financial and tax compliance specialists with over 15 years of experience in providing efficient and comprehensive compliance solutions for local and multinational companies.</Text>
            :
            this.props.language === 'rs' ?
              <Text style={styles.descriptionText}>Sedište kompanije HLB T&M Consulting doo se nalazi se u Beogradu i pružamo usluge računovodstva, poreskog savetovanja, pravnog savetovanja i izrade studija o transfernim cenama. Naš tim okuplja stručnjake koji su poslovno iskustvo sticali u vodećim međunarodnim kompanijama iz oblasti finansijskog i poreskog savetovanja.</Text>
            : null
          }
          {this.props.about.map(this.renderList)}
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  about: state.aboutReducer.about,
  language: state.settingsReducer.language
});

const dispatchToProps = dispatch => ({
  saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(AboutUs);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: metrics.large
  },
  imageTitleContainer: {
    alignItems: 'center',
    paddingTop: metrics.huge,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: metrics.tinyBorder,
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
    alignSelf: 'center'
  },
  descriptionText: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.small,
    color: colors.black,
    marginHorizontal: metrics.large,
    marginVertical: metrics.medium,
    marginBottom: metrics.huge
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
    width: 11
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
  },
  shareImage: {
    marginRight: metrics.medium,
    color: '#bdbdbd',
  },
});
