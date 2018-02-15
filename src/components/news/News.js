import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { metrics, colors, fonts } from '../../theme';

class News extends Component {

  state = {
    news: [{
      title: 'Title',
      description: 'Description lorem ipsum...',
      date: '30.04.2018',
      image: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg',
      paragraphs: [{
        type: 'text',
        value: 'lorem imsum'
      },{
        type: 'image',
        value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
      },{
        type: 'text',
        value: 'lorem imsum'
      }]
    },{
      title: 'Title2',
      description: 'Description lorem ipsum2...',
      date: '30.05.2018',
      image: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg',
      paragraphs: [{
        type: 'text',
        value: 'lorem imsum2'
      },{
        type: 'image',
        value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
      },{
        type: 'text',
        value: 'lorem imsum2'
      }]
    }]
  };

  goToNewsDetail = key => this.props.navigation.navigate(key);

  renderList = (item, index) =>
    <TouchableOpacity key={index} onPress={() => this.goToNewsDetail('NewsDetail')} style={styles.item}>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: item.image}}
      />
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.date}</Text>
      </View>
    </TouchableOpacity>

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.news.map(this.renderList)}
      </ScrollView>
    );
  }
}

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: metrics.medium
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.small
  },
  text: {
    fontSize: fonts.size.medium,
    marginLeft: metrics.medium
  }
});
