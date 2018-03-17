import styled from 'styled-components';

export const Wrapper = styled.article`
  align-items: center;
  background-color: #FFF;
  border-radius: 5px;
  box-shadow: 1px 1px 100px #DFDFDF;
  color: rgb(144,144,145);
  cursor: pointer;
  display: flex;
  font-size: 150px;
  height: 275px;
  justify-content: center;
  margin-bottom: 45px;
  margin-right: 30px;
  width: 500px;

  &::after {
    content: '+';
    display: inline-block;
    height: 100px;
    line-height: 50px;
  }

`;
