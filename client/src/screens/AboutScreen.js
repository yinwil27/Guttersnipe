import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

class AboutScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

const styles = new StyleSheet({

});

AboutScreen.propTypes = {

};

const mapStateToProps = (state) => {
  /*  const {
      data,
    } = state.value;
    return {data}; */
  return {};
};

@connect(mapStateToProps, {
  /* requestRegistryData, */
})(AboutScreen)

export default AboutScreen;
