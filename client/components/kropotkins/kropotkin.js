import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchRandomKropotkin} from '../../actions/kropotkins/kropotkinActions'

class KropotkinQuote extends Component {

  componentWillMount() {
    this.props.fetchRandomKropotkin();
  }

  render() {
    const {isFetchingKropotkin, kropotkinFetchError, paragraph} = this.props.kropotkin;
    if (isFetchingKropotkin || kropotkinFetchError || ! paragraph) {
      return <h1></h1>;
    }
    console.log('props', this.props)
    return (
      <div className="RedOnBlack">
        <div className="text-center BlackOnRed">
          <h2><span>{paragraph}</span></h2>
        </div>
        <div>
          <h3><a href="http://www.gutenberg.org/files/23428/23428-h/23428-h.htm">The Conquest of Bread</a> by <a href="http://en.wikipedia.org/wiki/Peter_Kropotkin">Pyotr Alexeivitch Kropotkin</a></h3>
        </div>
        <button className="btn btn-danger" role="button" >New Quote</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomKropotkin: () => {
      dispatch(fetchRandomKropotkin())
    }
  };
};

const mapStateToProps = (state) => {
  return {
    kropotkin: state.kropotkin
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(KropotkinQuote);