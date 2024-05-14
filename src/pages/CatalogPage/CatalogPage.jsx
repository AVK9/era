import { Container, FiltrBox } from './CatalogPage.styled';
import { AdvertList } from '../../components/AdvertList/AdvertList';
import { LocationFiltr } from '../../components/Location/Location';
import { Filters } from '../../components/Filters/Filters';
import { Section } from '../../components/common/Section/Section';
import { Title, Flex } from '../../components';

const CatalogPage = () => {
  return (
    <Section>
      <Flex justify="center">
        <Title color={'#E44848'}>Catalog camper for rent </Title>
      </Flex>
      <Container>
        <FiltrBox>
          <LocationFiltr />
          <Filters />
        </FiltrBox>
        <AdvertList />
      </Container>
    </Section>
  );
};

export default CatalogPage;
