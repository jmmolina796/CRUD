import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

const baseStyles = () => injectGlobal`
  ${styledNormalize}

  @font-face {
    font-family: 'Loew-Heavy';
    src: url('/fonts/Loew-Heavy.otf');
  }

  @font-face {
    font-family: 'Loew-Medium';
    src: url('/fonts/Loew-Medium.otf');
  }

  body,
  #root {
    height: 100vh;
  }

  body {
    background-color: rgb(247, 247, 250);
    font-family: Loew-Medium;
    height: 100vh;
  }

`;

export default baseStyles;
