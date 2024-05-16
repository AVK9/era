import { useEffect } from 'react';
import Event from '../Event/Event';
import { EventsBox } from './EventsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsThunk } from './../../store/events/eventsThunk';
import {
  selectError,
  selectLoading,
  selectStateEvents,
} from '../../store/events/eventsSelector ';

const EventsList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsThunk());
  }, [dispatch]);

  const events = useSelector(selectStateEvents);

  return (
    <EventsBox>
      <Event events={events} />
    </EventsBox>
  );
};

export default EventsList;
