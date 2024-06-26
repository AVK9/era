import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IconButton } from './IconButton';

const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.radio &&
    css`
      flex-direction: row;
      align-items: center;
      align-content: center;
    `}
`;
const Label = styled.label`
  padding-bottom: 18px;

  font-family: var(--font-family);
  font-weight: 400;

  font-size: 16px;
  line-height: 125%;
  color: ${(props) => (props.active ? '#101828' : 'rgba(16, 24, 40, 0.6)')};

  ${(props) =>
    props.radio &&
    css`
      padding-bottom: 0px;
    `}
`;

const Input = styled.input`
  border-radius: 10px;
  padding: 18px 18px 18px 18px;
  width: 400px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;

  width: 300px;
  background: var(--inputs);
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
