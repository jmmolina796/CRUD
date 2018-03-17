import styled from 'styled-components';
import PropTypes from 'prop-types';
import circleFadeAnimation from './circleFadeAnimation';

const Circle = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: ${ ({ degrees }) => `rotate(${degrees}deg)` };
  width: 100%;

  &::before {
    animation: ${circleFadeAnimation} 1.2s infinite ease-in-out both;
    animation-delay: ${ ({ delay }) => `${delay}s` };
    background-color: #333;
    border-radius: 100%;
    content: '';
    display: block;
    height: 15%;
    margin: 0 auto;
    width: 15%;
  }

`;

Circle.propTypes = {
  degrees: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
};

Circle.defaultProps = {
  degrees: 0,
  delay: 0,
};

export default Circle;
