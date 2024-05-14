import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: #f7f7f7;
  box-shadow: 0 0 10px #8a8a8a;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: flex;

  padding: 5px 0px 5px 0px;
  margin: 0 auto;

  justify-content: center;
  align-items: center;
  width: 100vw;
  @media only screen and (min-width: 768px) {
    justify-content: start;
  }
`;
export const BoxLogo = styled.div`
  border-right: 2px solid black;
  width: 100px;
  height: 70px;
  display: flex;
  gap: 30px;
`;
export const BoxName = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
`;
export const Name = styled.span`
  margin-top: 8px;
  width: 100px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 25px;
  line-height: 125%;
  color: var(--main);
  letter-spacing: 1px;
`;
export const NamePart = styled.div`
  width: 100px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 15px;
  line-height: 125%;
  color: var(--main);
  text-align: center;
`;
export const StyledElement = styled.div`
  position: relative;
  padding: 0 10px;
  &:before,
  &:after {
    content: ' ';
    position: absolute;
    display: flex;
    align-items: center;

    top: 8px;
    bottom: 0;
    height: 2px;
    width: 20px;
    background-color: #000;
  }
  &:before {
    left: 0px;
  }
  &:after {
    right: 0px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  @media only screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
  &:hover {
    color: var(--button);
  }
  &.active {
    color: var(--button);
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 170px;
  }
`;
