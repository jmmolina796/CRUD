import { keyframes } from 'styled-components';

const circleFadeAnimation = keyframes`
    0%, 39%, 100% {
      opacity: 0;
    }

    40% {
      opacity: 1;
    }
`;

export default circleFadeAnimation;
