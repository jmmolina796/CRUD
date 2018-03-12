import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: ${ ({ alignItems }) => alignItems };
  display: flex;
  height: ${ ({ height }) => height };
  justify-content: ${ ({ justifyContent }) => justifyContent };
  width: ${ ({ width }) => width };
`;
