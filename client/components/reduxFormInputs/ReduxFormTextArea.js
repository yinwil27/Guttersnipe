import React, {PropTypes} from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';


const ReduxFormTextArea = ( { input, label, type, meta: { touched, error } } ) =>  (
  <FormGroup className="form-html-input" validationState={touched && error ? 'error' : null}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} placeholder={label} type={type}  componentClass="textarea" />
    <FormControl.Feedback />
    <HelpBlock>{error}</HelpBlock>
  </FormGroup>
);


ReduxFormTextArea.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  type: PropTypes.string,
  input: PropTypes.object
};

export default ReduxFormTextArea;
