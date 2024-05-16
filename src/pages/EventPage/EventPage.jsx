import { Section } from '../../components/common/Section/Section';
import { Title, Flex } from '../../components';
import EventsList from '../../components/EventsList/EventsList';

const EventPage = () => {
  return (
    <Section>
      <Flex justify="center" flex="column" direction="column">
        <Title color={'#E44848'}>Events </Title>

        <EventsList />
      </Flex>
    </Section>
  );
};

export default EventPage;
