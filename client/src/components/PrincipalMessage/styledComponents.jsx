import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: rgba(247,247,250, 0.9);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;


export const ImageContainer = styled.div`
  background-attachment: fixed;
  background-image: ${({ src }) => src ? `url(${src})` : ''};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  filter: blur(5px);
  height: 100%;
  position: relative;
  width: 100%;
  z-index: -1;
`;

export const Title = styled.h1`
  left: 50%;
  margin: 0;
  font-size: 130px;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
