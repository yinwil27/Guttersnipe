import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const defaultParagraph = `
        If it be so, can we doubt that work
         will become a pleasure 
        and a relaxation in a society of equals, 
        in which "hands" will not be compelled 
        to sell themselves to toil, 
        and to accept work under any conditions? 
        Repugnant tasks will disappear, 
        because it is evident 
        that these unhealthy conditions 
        are harmful to society as a whole.
         Slaves can submit to them, 
        but free men will create new conditions, 
        and their work will be pleasant 
        and infinitely more productive. 
        The exceptions of to-day will be 
        the rule of to-morrow.
`;

class Kroptkin extends Component {
  static navigationOptions = {
    title: "The Conquest of Bread"
  };
  constructor(props) {
    super(props);
    this.state = {
      paragraph: defaultParagraph
    };
  }

  fetchRandomKropotkin() {
    const kropotkins = this.props.kropotkin;
    this.setState({
      paragraph: kropotkins[Math.floor(Math.random() * kropotkins.length)]
    });
  }

  _onButtonPress() {
    this.fetchRandomKropotkin();
  }

  componentWillMount() {
    this.fetchRandomKropotkin();
  }

  render() {
    const paragraph = this.state.paragraph;
    return (
      <View style={styles.kropotkinScreenContainer}>
        <Text style={styles.kropotkinParagraph}>{paragraph}</Text>
        <Button
          style={styles.kropotkinQuoteButton}
          color="green"
          transparent
          title="New Quote"
          onPress={() => this._onButtonPress()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  kropotkinQuoteButton: {},
  kropotkinParagraph: {},
  kropotkinScreenContainer: {}
});

const mapDispatchToProps = {};
const mapStateToProps = state => state.kropotkin;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kroptkin);
