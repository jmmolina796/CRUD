import React from 'react';

import { Wrapper } from './styledComponents';
import { Header } from '../Header';
import { Content } from '../Content';
import { Footer } from '../Footer';

export const App = () => (
  <Wrapper>
    <Header />
    <Content>
      <div>Hello World</div>
    </Content>
    <Footer />
  </Wrapper>
);
