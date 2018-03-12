import React from 'react';

import { Wrapper } from './styledComponents';

import { FlexSection } from '../FlexSection';
import { NavButton } from '../NavButton';

export const Navigation = () => (
  <Wrapper>
    <FlexSection width="100%" height="80px">
      <NavButton>Subjects</NavButton>
      <NavButton>Students</NavButton>
    </FlexSection>
  </Wrapper>
);
