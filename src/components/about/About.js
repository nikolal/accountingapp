import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SimpleLineIcons }  from '@expo/vector-icons';
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
        <SimpleLineIcons
          name={item.icon}
          size={17}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
        <SimpleLineIcons
          name="arrow-right"
          size={20}
          color="black"
          style={styles.arrowIcon}
        />
    </TouchableOpacity>

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://creditarmy.org/wp-content/uploads/2017/05/OurTeam.jpg' }}
        />
        <Text style={styles.descriptionText}>HLB T&M Consulting is one of the leading accounting and consulting firms in Serbia specialised to support international companies having business in Serbia.</Text>
        <View style={styles.itemsContainer}>
          {this.props.about.map(this.renderList)}
        </View>
      </View>
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
  image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    alignSelf: 'center',
    marginVertical: metrics.huge,
    borderRadius: 5
  },
  descriptionText: {
    fontSize: fonts.size.medium,
    color: colors.grey,
    alignSelf: 'center',
    marginHorizontal: metrics.medium,
  },
  itemsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: metrics.large,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.huge,
    backgroundColor: 'rgb(242, 242, 242)',
    borderRadius: 10,
    borderBottomWidth: metrics.smallBorder,
    borderBottomColor: colors.grey
  },
  icon: {
    marginRight: metrics.medium
  },
  textIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: fonts.size.large
  }
});


