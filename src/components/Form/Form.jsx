import { useState } from 'react';
import { toast } from 'react-toastify';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormBox, Name, Slogan, Forma, InputBoxes } from './Form.styled';
import { Button } from '../common/Button';
import { Calendar, Flex, InputField } from '../../components';
import { useSelector } from 'react-redux';
import { InputRadio } from '../common/InputRadio';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [radio, setRadio] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [dateValid, setDateValid] = useState(false);

  const navigate = useNavigate();

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
      const data = { name, email, date, radio };
      console.log(data);
      reset();
      navigate('/events');
      // location.reload();
    }
  };

  const reset = () => {
    setName('');
    setEmail('');

    toast.success(
      'Congratulations! Order received. Wait for a letter in the mail with further instructions'
    );
  };

  const clickDate = useSelector((state) => state.time.stateHandleDate);

  return (
    <FormBox>
      <Forma onSubmit={handleSubmit}>
        <InputBoxes>
          <InputField
            label="Full name"
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
            label="Date of bird"
            type="date"
            name="date"
            value={date}
            onChange={(e) => {
              emailRegex.test(e.target.value)
                ? setDateValid(true)
                : setDateValid(false);
              setDate(e.target.value);
            }}
            placeholder="ivan@gmail.com"
          />
          <Slogan>Where did you hear about this event?</Slogan>
          <Flex gap="20px">
            <InputRadio
              label="Social media"
              type="radio"
              name="radio"
              value="Social media"
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            />
            <InputRadio
              label="Friends"
              type="radio"
              name="radio"
              value="Friends"
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            />
            <InputRadio
              label="Found myself"
              name="radio"
              value="Found myself"
              type="radio"
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            />
          </Flex>
        </InputBoxes>
        <Button>Send</Button>
      </Forma>
    </FormBox>
  );
};
