import React from 'react';

import FadingCircle from './fadingCircle';
import Circle from './circle';

export const CircleSpinner = () => (
  <FadingCircle>
    <Circle />
    <Circle degrees={30} delay={-1.1} />
    <Circle degrees={60} delay={-1} />
    <Circle degrees={90} delay={-0.9} />
    <Circle degrees={120} delay={-0.8} />
    <Circle degrees={150} delay={-0.7} />
    <Circle degrees={180} delay={-0.6} />
    <Circle degrees={210} delay={-0.5} />
    <Circle degrees={240} delay={-0.4} />
    <Circle degrees={270} delay={-0.3} />
    <Circle degrees={300} delay={-0.2} />
    <Circle degrees={330} delay={-0.1} />
  </FadingCircle>
);
