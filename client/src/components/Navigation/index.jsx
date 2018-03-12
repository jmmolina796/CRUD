import React from 'react';
import PropTypes from 'prop-types';

import { FlexSection } from '../FlexSection';
import { Wrapper } from './styledComponents';
import { NavElement } from './NavElement';

export const Navigation = ({ elements, path }) => (
  <Wrapper>
    <FlexSection width="100%" height="80px">
      {elements.map(
        ({ id, name, url, action }) => (
          <NavElement
            key={id}
            url={url}
            action={() => action(url)}
            path={path}
          >
            {name}
          </NavElement>
        ))
      }
    </FlexSection>
  </Wrapper>
);

Navigation.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
    }),
  ).isRequired,
  path: PropTypes.string.isRequired,
};
