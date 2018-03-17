import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../';
import { Wrapper, ButtonsArea } from './styledComponents';
import { Button } from '../';

export const ModalMessage = ({ title, message, goBack, acceptAction, acceptLabel }) => (
  <Modal header={<h3>{title}</h3>} close={goBack} message>
    <Wrapper>
      <p>{message}</p>
      <ButtonsArea>
        <Button secondary action={acceptAction}>{acceptLabel}</Button>
        <Button primary action={goBack}>Cancel</Button>
      </ButtonsArea>
    </Wrapper>
  </Modal>
);

ModalMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  acceptAction: PropTypes.func.isRequired,
  acceptLabel: PropTypes.string.isRequired,
};
