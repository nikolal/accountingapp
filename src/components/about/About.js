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
          source={{ uri: 'http://chimeiusa.com/wp-content/uploads/2017/06/How-to-Find-the-Best-Inventory-Management-Accounting-Software-for-Your-Small-Business-5-Questions-to-Ask-300x200.jpg' }}
        />
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
    height: Dimensions.get('window').height / 3,
  },
  itemsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    margin: metrics.large
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: metrics.small,
    padding: metrics.huge,
    backgroundColor: colors.lightGrey,
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


