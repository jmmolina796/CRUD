import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import _ from 'lodash';

import {
  Wrapper,
  Separation,
  Label,
} from './styledComponents';

import { Tools } from './Tools';

const transform = name => `${_.capitalize(_.replace(name, '_', ' '))}:`

export const Card = ({ data, modifyElement, deleteElement }) => (
  <Wrapper>
    <Tools modifyElement={modifyElement} deleteElement={deleteElement}  />
    <Separation>
      {
        _.map(data, (val, key) => key === 'id' ? null : <Label key={generate()}>{transform(key)}</Label>)
      }
    </Separation>
    <Separation>
      {
        _.map(data, (val, key) => key === 'id' ? null : <Label key={generate()}>{val}</Label>)
      }
    </Separation>
  </Wrapper>
);

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  modifyElement: PropTypes.func.isRequired,
  deleteElement: PropTypes.func.isRequired,
};
