import styled from 'styled-components';

export const Wrapper = styled.img`
  display: inline-block;
  height: ${ ({ height }) => height };
  width: ${ ({ width }) => width };
`;
