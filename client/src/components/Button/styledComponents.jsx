import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 150px;

  ${({ primary }) => primary && css`
    border: solid 2px #666;
    color: #666;

    &:hover {
      border: solid 2px #777;
      color: #777;
    }

  `};

  ${({ secondary }) => secondary && css`
    border: solid 2px #e86237;
    color: #e86237;

    &:hover {
      border: solid 2px #F97328;
      color: #F97328;
    }

  `};

`;
