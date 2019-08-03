import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import OurClientsItem from './OurClientsItem.js';

const imageList = [
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/powerchina.jpg') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/Deme.jpg') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/delta.jpg') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/essilor.png')}
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/EA.jpg') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/gilbarco.png')}
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/flixbus.png') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/HEP.jpg')}
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/Lyca.jpg') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/ofika.png') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/icopal.jpg')}
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/ursa.jpg') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/BussHoff.jpg') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/sarens.jpg') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/blackRed.png') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/terran.png') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch' }}
    source={require('../../../assets/images/abl.png') }
  />,
  <Image
    style={{ width: 90, height: 90, resizeMode: 'stretch'}}
    source={require('../../../assets/images/abaxis.png')}
  />,
  // <Image
  //   style={{ width: 90, height: 90, resizeMode: 'stretch'}}
  //   source={require('../../../assets/images/CimmaronSoftwareAR.jpg')}
  // />,
  // <Image
  //   style={{ width: 90, height: 90, resizeMode: 'stretch'}}
  //   source={require('../../../assets/images/cinestar.jpg')}
  // />,
  // <Image
  //   style={{ width: 90, height: 90, resizeMode: 'stretch'}}
  //   source={require('../../../assets/images/Rabalux.jpg')}
  // />,
  // <Image
  //   style={{ width: 90, height: 90, resizeMode: 'stretch'}}
  //   source={require('../../../assets/images/intelestream.png')}
  // />,
  // <Image
  //   style={{ width: 90, height: 90, resizeMode: 'stretch'}}
  //   source={require('../../../assets/images/etib.jpg')}
  // />,
  // <Image
  //   style={{ width: 90, height: 90, resizeMode: 'stretch'}}
  //   source={require('../../../assets/images/euronews.jpg')}
  // />,
  // <Image
  //   style={{ width: 90, height: 90, resizeMode: 'stretch'}}
  //   source={require('../../../assets/images/Naos.png')}
  // />,
  // <Image
  //   style={{ width: 90, height: 90, resizeMode: 'stretch'}}
  //   source={require('../../../assets/images/fanuc.jpg')}
  // />,
  // <Image
  //   style={{ width: 90, height: 90, resizeMode: 'stretch'}}
  //   source={require('../../../assets/images/sba.png')}
  // />,


];

class OurClients extends Component {

  renderItem = ({ item, index }) => {
    return (
      <OurClientsItem index={index} >
        <View
          style={{ height: 100, width: 100, margin: 14, justifyContent: 'center', alignItems: 'center'}}>
          {item}
        </View>
      </OurClientsItem>
    );
}

render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => String(index)}
          data={imageList}
          renderItem={this.renderItem}
          contentContainerStyle={styles.container}
          numColumns={3}
        />
    </View>
    );
  }
}

export default OurClients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
