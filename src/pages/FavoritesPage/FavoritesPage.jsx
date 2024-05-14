import { Container, FiltrBox } from '../CatalogPage/CatalogPage.styled';
import { AdvertListFavorites } from '../../components/AdvertListFavorites/AdvertListFavorites';
import { LocationFiltr } from '../../components/Location/Location';
import { Filters } from '../../components/Filters/Filters';
import { Section } from '../../components/common/Section/Section';
const FavoritesPage = () => {
  return (
    <Section>
      <Container>
        <FiltrBox>
          <LocationFiltr />
          <Filters />
        </FiltrBox>
        <AdvertListFavorites />
      </Container>
    </Section>
  );
};

export default FavoritesPage;
