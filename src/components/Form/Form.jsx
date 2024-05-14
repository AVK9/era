import { useState } from 'react';
import { toast } from 'react-toastify';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormBox, Name, Slogan, Forma, InputBoxes } from './Form.styled';
import { Button } from '../common/Button';
import { Calendar, InputField } from '../../components';
import { useSelector } from 'react-redux';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const openCalendar = () => setShowCalendar(true);
  const closeCalendar = () => setShowCalendar(false);

  const nameRegex = /[а-яА-Яa-zA-Z]{3,}/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = { name, email, password };

    checkData();
  };

  const checkData = () => {
    if (!emailRegex.test(email)) {
      toast.warn('Email must have been correct');
      return;
    }
    if (!nameRegex.test(name)) {
      toast.warn('Name must have been 3 charge');
      return;
    } else {
      const data = { name, email, startDate, comment };
      console.log(data);
      reset();
      location.reload();
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setStartDate('');
    setComment('');
    toast.success(
      'Congratulations! Order received. Wait for a letter in the mail with further instructions'
    );
  };

  const clickDate = useSelector((state) => state.time.stateHandleDate);

  return (
    <FormBox>
      <Name>Book your campervan now</Name>
      <Slogan>Stay connected! We are always ready to help you.</Slogan>
      <Forma onSubmit={handleSubmit}>
        <InputBoxes>
          <InputField
            label="Name"
            placeholder="Ivan Bereza"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              nameRegex.test(e.target.value)
                ? setNameValid(true)
                : setNameValid(false);
              setName(e.target.value);
            }}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              emailRegex.test(e.target.value)
                ? setEmailValid(true)
                : setEmailValid(false);
              setEmail(e.target.value);
            }}
            placeholder="ivan@gmail.com"
          />

          <InputField
            label="Booking date"
            type="text"
            name="calendar"
            // as={DatePicker}
            // dateFormat="dd/MM/yyyy"
            value={clickDate}
            // selected={calend}
            // onChange={(date) => setStartDate(date)}
            // onChange={openCalendar}
            icon="calendar"
            calendar
            onClick={openCalendar}
          />
          {showCalendar && <Calendar onClose={closeCalendar} />}
          <InputField
            label="Comment"
            type="textarea"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            comment
          />
        </InputBoxes>
        <Button>Send</Button>
      </Forma>
    </FormBox>
  );
};
