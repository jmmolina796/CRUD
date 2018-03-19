import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Field } from 'redux-form';

import Input from '../forms/Input';
import Select from '../forms/Select';
import { Wrapper, ButtonsArea } from './styledComponents';
import { Button } from '../Button';
import telephoneNormalize from '../forms/normalizers/telephone';

export const StudentsForm = ({ semesters, subjects, goBack, acceptAction, acceptLabel }) => {
return(
  <Wrapper>
    <Field
      component={Input}
      id="name"
      label="Name: "
      name="name"
      type="text"
    />
    <Field
      component={Input}
      id="last_name"
      label="Last name: "
      name="last_name"
      type="text"
    />
    <Field
      component={Input}
      id="phone"
      label="Phone: "
      name="phone"
      type="text"
      normalize={telephoneNormalize}
    />
    <Field
      component={Select}
      id="id_semester"
      label="Semester: "
      name="id_semester"
      >
        <option value="0" disabled>Select an option:</option>
        {
          _.map(semesters, ({ id, name }) => <option key={id} value={id}>{name}</option>)
        }
    </Field>
    <Field
      component={Select}
      id="id_subject"
      label="Favorite subject: "
      name="id_subject"
    >
      <option value="0" disabled>Select an option:</option>
      {
        _.map(subjects, ({ id, name }) => <option key={id} value={id}>{name}</option>)
      }
    </Field>
    <ButtonsArea>
      <Button secondary action={acceptAction}>{acceptLabel}</Button>
      <Button primary action={goBack}>Cancel</Button>
    </ButtonsArea>
  </Wrapper>
)};

StudentsForm.propTypes = {
  semesters: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  subjects: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  goBack: PropTypes.func.isRequired,
  acceptAction: PropTypes.func.isRequired,
  acceptLabel: PropTypes.string.isRequired,
};
