import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { metrics, colors, fonts, images } from '../../../theme';

const AllowanceResult = ({ calculation }) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={images.background} style={styles.image}>
      <Text style={styles.calculText}>Obračun dnevnica u zemlji:</Text>
        <View style={styles.itemContainerDark}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Neto dnevnica u RSD</Text>
            <Text style={styles.number}>{calculation.allowancesHome.value && calculation.allowancesHome.value.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Osnovica za oporezivanje</Text>
            <Text style={styles.number}>{calculation.allowancesHome.gross && calculation.allowancesHome.gross.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.itemContainerDark}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Porez</Text>
            <Text style={styles.number}>{calculation.allowancesHome.tax && calculation.allowancesHome.tax.toFixed(2)}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>

  );
};


export default AllowanceResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // height: Dimensions.get('window').height / 2.9,
    justifyContent: 'flex-end'
  },
  calculText: {
    marginBottom: metrics.huge,
    color: colors.white,
    fontSize: fonts.size.hugeToExtra,
  },
  itemContainer: {
    backgroundColor: colors.white
  },
  itemContainerDark: {
    backgroundColor: colors.veryLightGrey,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: metrics.hugeToExtrahuge,
    marginHorizontal: metrics.hugeToExtrahuge,
    borderColor: '#e6e6e6',
    borderBottomWidth: metrics.tinyBorder,
    borderTopWidth: metrics.tinyBorder
  },
  text: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    color: colors.grey
  },
  number: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.large,
    color: '#47d6e2'
  }
});
