import { Container } from '../RegistrationPage/RegistrationPage.styled';

import { Section } from '../../components/common/Section/Section';
import { Title } from '../../components';
import { Form } from '../../components/Form/Form';

const RegistrationPage = () => {
  return (
    <Section>
      <Container>
        <Title>Event registration</Title>
        <Form />
      </Container>
    </Section>
  );
};

export default RegistrationPage;
