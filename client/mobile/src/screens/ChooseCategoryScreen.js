import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import GsButton from "../components/GsButton";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class ChooseCategoryScreen extends Component {
  static navigationOptions = {
    title: "Choose Category"
  };
  constructor(props) {
    super(props);
  }

  render() {
    const categorization = this.props.categorization;

    return (
      <View style={styles.chooseCategoryScreenContainer}>
        <View>
          <Text>Choose a Category</Text>
        </View>
        {Object.keys(categorization).map(c => (
          <GsButton
            styleContainer={{
              backgroundColor: "red",
              padding: 20,
              margin: 25,
              width: "80%"
            }}
            styleText={{
              color: "black",
              fontWeight: "900",
              textAlign: "center"
            }}
            key={c}
            title={c}
            onPress={() => {
              this.props.navigation.navigate("ChooseSubcategoryScreen", {
                category: c
              });
            }}
          >
            {c}
          </GsButton>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  chooseCategoryButton: {},
  chooseCategoryScreenContainer: {
    backgroundColor: "black",
    height: "100%"
  }
});

ChooseCategoryScreen.propTypes = {};

const mapDispatchToProps = {};
const mapStateToProps = state => state.categorization;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseCategoryScreen);
