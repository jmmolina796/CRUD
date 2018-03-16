import React from 'react';

import { Modal } from '../../../';

export const New = () => (
  <Modal header={<p>Header</p>} footer={<p>Footer</p>} close={() => alert()} >
    <p>Body</p>
  </Modal>
);
