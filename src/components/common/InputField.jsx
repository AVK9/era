import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IconButton } from './IconButton';

const InputBox = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 18px 18px 18px 80px;
  width: 400px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;

  ${(props) =>
    props.comment &&
    css`
      height: 114px;
      padding: 18px 18px 18px 95px;
    `}
  ${(props) =>
    props.calendar &&
    css`
      padding: 18px 18px 18px 120px;
    `}
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 18px 18px 18px;
  height: 56px;
  font-family: var(--font-family);
  font-weight: 400;

  font-size: 16px;
  line-height: 125%;
  color: ${(props) => (props.active ? '#101828' : 'rgba(16, 24, 40, 0.6)')};
`;

const InputInput = styled.input`
  outline: none;
  border: none;
  width: 300px;
  background: var(--inputs);
  ${(props) =>
    props.calendar &&
    css`
      width: 260px;
    `}
`;

const InputComment = styled.textarea`
  outline: none;
  border: none;
  width: 290px;
  height: 80px;
  background: var(--inputs);
  resize: none;
`;

const IconBox = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const InputField = (props) => {
  const [activeInput, setActiveInput] = useState(null);
  const handleFocus = (inputId) => {
    setActiveInput(inputId);
  };

  const handleBlur = () => {
    setActiveInput(null);
  };

  const { type, label, inputId, icon, onClick } = props;
  const Input = type === 'textarea' ? InputComment : InputInput;
  return (
    <InputBox {...props}>
      <Label active={activeInput === inputId}>{label}</Label>
      <Input
        {...props}
        onFocus={() => handleFocus(inputId)}
        onBlur={handleBlur}
        type={type}
        required
        onClick={onClick}
      />
      <IconBox>
        <IconButton icon={icon} />
      </IconBox>
    </InputBox>
  );
};
