import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Field } from 'redux-form';

import Input from '../forms/Input';
import Select from '../forms/Select';
import { Wrapper, ButtonsArea } from './styledComponents';
import { Button } from '../Button';

export const SubjectsForm = ({ semesters, categories, goBack, acceptAction, acceptLabel }) => {
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
      component={Select}
      id="id_category"
      label="Category: "
      name="id_category"
    >
      <option value="0" disabled>Select an option:</option>
      {
        _.map(categories, ({ id, name }) => <option key={id} value={id}>{name}</option>)
      }
    </Field>
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
      component={Input}
      id="credits"
      label="Credits: "
      name="credits"
      type="text"
    />
    <ButtonsArea>
      <Button secondary action={acceptAction}>{acceptLabel}</Button>
      <Button primary action={goBack}>Cancel</Button>
    </ButtonsArea>
  </Wrapper>
)};

SubjectsForm.propTypes = {
  semesters: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  categories: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  goBack: PropTypes.func.isRequired,
  acceptAction: PropTypes.func.isRequired,
  acceptLabel: PropTypes.string.isRequired,
};
