import styled from 'styled-components';

export const Wrapper = styled.article`
  background-color: #FFF;
  border-bottom: 3px #e86237 solid;
  border-radius: 5px;
  box-shadow: 1px 1px 100px #DFDFDF;
  margin-bottom: 45px;
  margin-right: 30px;
  overflow: hidden;
  position: relative;
  width: 500px;
`;

export const Separation = styled.div`
  display: inline-block;
  margin: 50px 0 50px 0;
  height: calc(100% - 100px);
  vertical-align: top;
  width: 50%;
`;

export const Label = styled.div`
  font-size: 18px;
  padding: 10px 0 5px 60px;
`;
