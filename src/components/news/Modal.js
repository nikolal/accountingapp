import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { metrics, colors, fonts } from '../../theme';
import { LinearGradient } from 'expo';


export default class MyComponent extends Component {
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({ modalVisible:true });
  }

  closeModal() {
    this.setState({ modalVisible:false });
  }

  render() {
    return (
        <View style={styles.container}>
          <Modal
            visible={this.state.modalVisible}
            animationType={'fade'}
            transparent
            onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>

              <View style={{ backgroundColor: 'grey'}} />
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

                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                />

              
                <Text>CHOOSE LANGUAGE</Text>

                <TouchableOpacity style={styles.languageTextContainer}>
                  <Text style={styles.languageText}>English</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.languageTextContainer}>
                  <Text style={styles.languageText}>Serbian</Text>
                </TouchableOpacity>

                <Text>You can always change the language</Text>

              </View>
            </View>
          </Modal>
          <Button
              onPress={() => this.openModal()}
              title="Open modal"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    height: Dimensions.get('window').height / 1.3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'purple',
  },
  languageTextContainer: {
    padding: metrics.medium,
    borderColor: colors.orange,
    borderWidth: metrics.tinyBorder
  },
  languageText:{
    fontSize: fonts.size.medium
  }
});
