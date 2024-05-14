import { Link } from 'react-router-dom';
import {
  Name,
  NamePart,
  BoxName,
  HeaderContainer,
  Navigation,
  BoxLogo,
  StyledElement,
  StyledLink,
  Flex,
} from './Header.styled';
import logo from '../../assets/img/logo.svg';
import { Section } from '../../components/common/Section/Section';

export const Header = () => {
  return (
    <HeaderContainer>
      <Section>
        <Flex>
          <div>
            <Link to={'/'}>
              <BoxLogo>
                <img src={logo} alt="Camper for you" />
                <BoxName>
                  <Name>CAMPER</Name>
                  <StyledElement>
                    <NamePart>FOR YOU</NamePart>
                  </StyledElement>
                </BoxName>
              </BoxLogo>
            </Link>
          </div>
          <div>
            <Navigation>
              <StyledLink to="/catalog">Catalog</StyledLink>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </Navigation>
          </div>
        </Flex>
      </Section>
    </HeaderContainer>
  );
};
