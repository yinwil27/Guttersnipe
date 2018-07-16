import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import PageTitle from '../components/PageTitle';

import  categorization  from '../../redux/store/categorizations';

import PropTypes from 'prop-types';
import GsButton from "../components/GsButton";

class ChooseSubcategoryScreen extends Component {
  static navigationOptions = {
    title: 'Choose Subcategory',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation;
    const category = navigation.getParam('category', '');
    const subcategories = categorization[category];

    return (
      <View style={styles.chooseSubcategoryScreenContainer}>
        <View>
          <PageTitle>Choose a Category</PageTitle>
        </View>
        {subcategories.map(s =>
          <GsButton
            styleContainer={{backgroundColor: "black", padding: 20, margin: 25, width: "80%"}}
            styleText={{color: 'red', fontWeight: '900', textAlign: "center"}}
            key={s}
            title={s}
            onPress={()=>{
              this.props.navigation.navigate('ShareableListScreen', {
                subcategory: s
              });
            }}
          >{s}
          </GsButton>)}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  chooseSubcategoryScreenContainer: {},
  chooseSubcategoryButton : {}
});

ChooseSubcategoryScreen.propTypes = {};

/*
function mapDispatchToProps(dispatch){
  return {};
}

function mapStateToProps(state) {
  return {
    categorization: state.categorization.categorization,
  };
}

*/
export default //connect(mapStateToProps, mapDispatchToProps)
(ChooseSubcategoryScreen);
