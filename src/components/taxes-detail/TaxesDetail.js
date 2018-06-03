import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { metrics, colors, fonts } from '../../theme';
import { FontAwesome }  from '@expo/vector-icons';
// import PropTypes from 'prop-types';

class TaxesDetail extends Component {

  state={
    inputText: ''
  }

  updateInputText = text => this.setState({ inputText: text });

  static navigationOptions = ({ navigation }) => ({
    title: 'TAXES DETAIL',
  })

  filterTaxes = item => item.text.toLowerCase().indexOf(this.state.inputText.toLowerCase()) >= 0;

  renderTaxes = (item, index) =>
    <View key={index }style={styles.oneParagraph}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={styles.percentageContainer}>
        <Text style={styles.percentage}>{item.percentage}</Text>
      </View>
    </View>

  render(){
    const { article } = this.props;
    const { inputText } = this.state;

    return (
      <ScrollView atyle={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>{article.title[this.props.language]}</Text>
          {/* // ne radi mi ovo iznad*/}
          {/* <Text style={styles.textSearch}>Pretraži željenu zaradu</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={this.updateInputText}
            value={inputText}
          /> */}

          <View style={styles.item}>
            {
              article.paragraphs
                .filter(this.filterTaxes)
                .map(this.renderTaxes)
            }
          </View>
        </View>
      </ScrollView>
    );
  }
}

TaxesDetail.propTypes = { // eslint-disable-line

};

const stateToProps = state => ({
  article: state.taxesReducer.article
});

export default connect(stateToProps, null)(TaxesDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // nece da bude beeeooo
  },
  innerContainer: {
    flex: 1,
    padding: metrics.medium,
    backgroundColor: colors.white,
  },
  // titleText: {
  //   margin: metrics.huge,
  //   alignSelf: 'center',
  //   color: colors.lightBlue1,
  //   fontSize: fonts.size.huge,
  //   fontFamily: 'openSansRegular',
  // },
  textSearch: {
    alignSelf: 'center',
    color: colors.lightBlue1,
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.large,
    marginBottom: metrics.large
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: metrics.smallBorder,
    marginHorizontal: metrics.medium
  },
  oneParagraph: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // borderBottomColor: colors.grey,
    // borderBottomWidth: metrics.tinyBorder,
    // marginHorizontal: metrics.large,
    paddingVertical: metrics.large
  },
  textContainer: {
    padding: metrics.medium
  },
  text: {
    color: colors.grey,
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.large,
  },
  percentageContainer:{
    padding: metrics.medium,
    borderBottomColor: colors.grey,
    borderBottomWidth: metrics.tinyBorder,
  },
  percentage: {
    fontFamily: 'openSansRegular',
    color: colors.lightBlue1,
    fontSize: fonts.size.small,


  }
});
