import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  padding: 30px 20px;
  position: relative;

  &::after {

    ${({ loading }) => loading && css`
      align-items: center;
      background-color: rgba(0,0,0,0.5);
      color: #FFF;
      content: 'Loading...';
      display: flex;
      font-size: 20px;
      height: 100%;
      justify-content: center;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    `}

  }

`;

export const ButtonsArea = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
`;
