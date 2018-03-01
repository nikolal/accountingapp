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
        <Text style={styles.titleText} numberOfLines={3}>{item.title}</Text>
        <SimpleLineIcons
        name="arrow-right"
        size={16}
        color="black"
        style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'http://chimeiusa.com/wp-content/uploads/2017/06/How-to-Find-the-Best-Inventory-Management-Accounting-Software-for-Your-Small-Business-5-Questions-to-Ask-300x200.jpg' }}
          />
          <View style={styles.itemsContainer}>
            {this.props.about.map(this.renderList)}
          </View>
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
  innerContainer: {
    flex: 1
  },
  image: {
    height: Dimensions.get('window').height / 3,
    marginBottom: metrics.huge
  },
  itemsContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  item: {
    backgroundColor: colors.lightGrey,
    margin: metrics.large,
    padding: metrics.huge,
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
  textIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


