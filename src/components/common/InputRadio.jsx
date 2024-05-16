import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IconButton } from './IconButton';

const InputBox = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  position: relative;
  /* background-color: pink; */
`;
const Label = styled.label`
  font-family: var(--font-family);
  font-weight: 400;
  padding-left: 10px;
  font-size: 16px;
  line-height: 125%;
  color: ${(props) => (props.active ? '#101828' : 'rgba(16, 24, 40, 0.6)')};
`;

// const Input = styled.input.attrs({ type: 'radio' })`
const Input = styled.input`
  outline: none;
  border: none;

  height: 18px;
  width: 18px;

  z-index: 1;
  opacity: 0;
`;

const IconBox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  /* border: 2px solid red; */

  position: absolute;
  top: 50% -9px;
  left: 0;
  /* background-color: ${(props) => (props.active ? 'red' : 'transparent')}; */
  background: ${(props) =>
    props.active
      ? 'radial-gradient(circle at center, #ff0000, #ffb7db)'
      : 'transparent'};
  border: ${(props) =>
    props.active
      ? 'radial-gradient(circle at center, #ff0000, #ffb7db)'
      : '2px solid red'};
`;

export const InputRadio = (props) => {
  const [activeInput, setActiveInput] = useState(null);
  const handleFocus = (inputId) => {
    setActiveInput(inputId);
  };

  const handleBlur = () => {
    setActiveInput(null);
  };

  const { type, label, inputId, icon } = props;
  return (
    <InputBox {...props}>
      <Input
        {...props}
        onFocus={() => handleFocus(inputId)}
        onBlur={handleBlur}
        type={type}
        required
      />
      <Label active={activeInput === inputId}>{label}</Label>
      <IconBox active={activeInput === inputId}>
        <IconButton icon={icon} />
      </IconBox>
    </InputBox>
  );
};
