import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons, Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme';
import { saveArticle } from './AboutContainer.js';

class AboutUs extends Component {

  goAboutDetail = (screenName, article) => {
    this.props.saveArticle(article);
    this.props.navigation.navigate(screenName);
  }

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goAboutDetail('AboutDetail', item)} style={styles.item}>
      <View style={styles.textIconsContainer}>
        <Ionicons
          name={item.icon}
          size={30}
          color={colors.lightBlue1}
          style={styles.icon}
        />
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <View style={styles.iconCircle}>
        <Ionicons
          name="md-arrow-dropright"
          size={30}
          color={colors.lightBlue1}
          style={styles.lll}
        />
      </View>
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Transfer-pricing-Belgrade.jpg' }}
          />
          <Text style={styles.headline}>HLB T&M Consulting</Text>
          <Text style={styles.descriptionText}>We are one of the leading accounting and consulting firms in Serbia specialised to support international companies having business in Serbia. We have a strong professional team of accountants, financial and tax compliance specialists with over 15 years of experience in providing efficient and comprehensive compliance solutions for local and multinational companies.</Text>
          <Text style={styles.descriptionText}>In over six years of steady growth, our company continued to provide first-rate tax advisory and accounting services to international companies with operations in Serbia and become one of the leading consulting partners in Belgrade for financial and tax issues.</Text>
          <View style={styles.itemsContainer}>
            {this.props.about.map(this.renderList)}
          </View>
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  about: state.aboutReducer.about
});

const dispatchToProps = dispatch => ({
  saveArticle: bindActionCreators(saveArticle, dispatch)
});

export default connect(stateToProps, dispatchToProps)(AboutUs);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.medium,
    backgroundColor: colors.white
  },
  image: {
    height: Dimensions.get('window').height / 3.5,
  },
  headline: {
    alignSelf: 'center',
    color: colors.lightBlue1,
    fontFamily: 'openSansBold',
    fontSize: fonts.size.huge,
    marginVertical: metrics.extraHuge,
  },
  descriptionText: {
    fontFamily: 'openSansBold',
    fontSize: fonts.size.large,
    color: colors.grey,
    alignSelf: 'center',
    marginHorizontal: metrics.large,
    marginBottom: metrics.large
  },
  itemsContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: metrics.huge,
    marginHorizontal: metrics.large,
    borderBottomColor: colors.grey,
    borderBottomWidth: metrics.smallBorder
  },
  icon: {
    marginRight: metrics.large
  },
  iconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: metrics.tiny,
    marginRight: metrics.large,
    width: 34,
    height: 34,
    borderColor: colors.lightGrey,
    borderWidth: metrics.mediumBorder,
    borderRadius: 17
  },
  textIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: fonts.size.huge,
    fontFamily: 'openSansBold',
    color: colors.grey
  }
});
