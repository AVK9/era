import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { Title } from '../common/Title';
import { EventBox, Description } from './Event.styled';

const Event = ({ events }) => {
  return (
    <>
      {events.map(({ title, description, event_date, organizer, id }) => (
        <EventBox key={id}>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <p>{event_date}</p>
          <p>{organizer}</p>
          <Link to="/registration">
            <Button to="/registration">Register</Button>
          </Link>
          <Link to="/participants">
            <Button loadmore>View</Button>
          </Link>
        </EventBox>
      ))}
    </>
  );
};
export default Event;
