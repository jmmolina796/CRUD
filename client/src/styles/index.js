import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

const baseStyles = () => injectGlobal`
  ${styledNormalize}

  @font-face {
    font-family: 'Gidole';
    src: url('/fonts/Gidole-Regular.ttf');
  }

  body,
  #root {
    height: 100vh;
  }

  body {
    background-color: rgb(247, 247, 250);
    font-family: Gidole;
    height: 100vh;
  }

`;

export default baseStyles;
