import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 5px;
  border: solid 1px rgb(144,144,145);
  color: rgb(144,144,145);
  cursor: pointer;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  text-align: center;
  width: 100px;

  &:hover {
    color: rgb(165,165,166);
    border-color: rgb(165,165,166);
  }

`;

export default Wrapper;
