import React, {PropTypes, Component} from 'react';

import { Field, reduxForm, formValueSelector} from 'redux-form';
import validate, {required} from '../create-wizard/validateCreateShareableWizard';
import ReduxFormComponentField from '../../reduxFormInputs/ReduxFormComponentField';
import MapWithGeocoderInput from './MapWithGeocoderInput';

import ReduxFormHTMLInput from '../../reduxFormInputs/ReduxFormHTMLInput';
import ReduxFormTextArea from '../../reduxFormInputs/ReduxFormTextArea';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import {connect} from 'react-redux';

let SpaceCreate = (props) => {
  const headline = props.headline;
  return (
    <Panel className="space-create-panel">
    <div className="space-create"> 
      <form onSubmit={props.handleSubmit}>
        <Field name="space_map"
               validate={required}
               component={props =>
                 <ReduxFormComponentField
                   meta={props.meta}
                   label={`Create a Map for ${headline}`}>
                   <MapWithGeocoderInput
                     currentPosition={props.currentPosition}
                     formInput={props.input}
                   />
                 </ReduxFormComponentField>}/>

        <Field name="space_notes" type="text" component={ReduxFormTextArea} label="Additional Notes"/>

        <div className="wizard-navigation-buttons">
          <Button type="button" className="previous" onClick={props.previousPage}>Previous</Button>
          <Button type="submit" className="next">Next</Button>
        </div>
      </form>
    </div>
    </Panel>
  );
};

SpaceCreate.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func,
  onChange: PropTypes.func,
  meta: PropTypes.object,
  headline: PropTypes.string, 
  currentPosition: PropTypes.array,
  input: PropTypes.obect
};

const selector = formValueSelector('wizard'); // <-- same as form name
SpaceCreate = connect(
  state => {
    return {
      headline: selector(state, 'headline')
    };
  }
)(SpaceCreate);

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SpaceCreate);
