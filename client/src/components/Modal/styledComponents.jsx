import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: rgba(100,100,100,0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const Button = styled.span`
  color: #FFF;
  font-size: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export const Content = styled.section`
  background: #FFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 60%;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 70px;
`;

export const Body = styled.div`
  flex: 1;
`;

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 70px;
`;
