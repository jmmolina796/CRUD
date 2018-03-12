import React from 'react';
import { Route } from 'react-router';

import { Wrapper } from './styledComponents';
import { Header } from '../Header';
import { Content } from '../Content';
import { Footer } from '../Footer';
import { Root } from '../routes/Root';

export const App = () => (
  <Wrapper>
    <Header />
    <Content>
      <Route path="/" component={Root} />
    </Content>
    <Footer />
  </Wrapper>
);
