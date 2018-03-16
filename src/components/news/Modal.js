import React from 'react';
import { Text, View, Image, Button, Modal, StyleSheet, Dimensions, AsyncStorage, TouchableOpacity } from 'react-native';
import { metrics, colors, fonts } from '../../theme';
import { LinearGradient } from 'expo';

const MyModal = ({ toggleModal, modalVisible, setLanguage, languages }) => {

  const renderLanguages = item =>
    <View style={styles.languageContainer} key={item.value}>
      <View style={styles.languageTextContainer}>
        <Text style={styles.languageText}>{item.name}</Text>
      </View>
      <TouchableOpacity onPress={() => setLanguage(item.value)}>
        <Image
          style={{width: 50, height: 50}}
          source={require('../../../assets/icons/checkmarkorange.png')}
        />
      </TouchableOpacity>
    </View>;

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType={'fade'}
        transparent
        onRequestClose={() => false}
      >
        <View style={styles.modalContainer}>

          <LinearGradient
            colors={['rgb(0, 0, 0)', 'rgb(38, 38, 38)', 'rgb(64, 64, 64)']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: Dimensions.get('window').height
            }}
          />

          <View style={styles.innerContainer}>
            <Text style={styles.chooseText}>CHOOSE LANGUAGE</Text>

            {languages.map(renderLanguages)}

            <Text style={styles.textChange}>You can always change your App language.</Text>

          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    height: Dimensions.get('window').height / 1.3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  chooseText: {
    color: colors.white,
    alignSelf: 'center'
  },
  languageContainer: {
    flexDirection: 'row',
  },
  languageTextContainer: {
    // marginRight: metrics.extraHuge,
    borderBottomColor: colors.green,
    borderBottomWidth: metrics.tinyBorder
  },
  languageText:{
    fontSize: fonts.size.huge,
    color: colors.white
  },
  textChange: {
    color: colors.grey
  }
});
