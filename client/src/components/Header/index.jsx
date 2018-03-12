import React from 'react';

import { Wrapper } from './styledComponents';
import { Navigation } from '../Navigation';
import { Image } from '../Image';
import { FlexSection } from '../FlexSection';

export const Header = () => (
  <Wrapper>
    <FlexSection width="100%" height="80px" >
      <Image src="../../public/logo.png" width="auto" height="80px" />
      <Navigation />
    </FlexSection>
  </Wrapper>
);
