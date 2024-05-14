import styled, { keyframes } from 'styled-components';
import backgr1 from '../../assets/img/backgraund/3.png';
import backgr2 from '../../assets/img/backgraund/1.png';
import backgr3 from '../../assets/img/backgraund/6.png';

const fadeInOut1 = keyframes`
  0%, 100% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
`;

const fadeInOut2 = keyframes`
  0%, 100% {
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
`;

const fadeInOut3 = keyframes`
  0%, 100% {
    opacity: 0;
  }
  30%, 70% {
    opacity: 1;
  }
`;

export const FullWidthBackgroundAnimation = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const BackgroundImage1 = styled.div`
  background-image: url(${backgr1});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${fadeInOut1} 12s infinite;
`;

export const BackgroundImage2 = styled.div`
  background-image: url(${backgr2});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${fadeInOut2} 12s infinite;
`;

export const BackgroundImage3 = styled.div`
  background-image: url(${backgr3});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${fadeInOut3} 12s infinite;
`;
