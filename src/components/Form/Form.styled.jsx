import styled from 'styled-components';

export const FormBox = styled.div`
  margin-top: 44px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
  position: relative;
`;

export const Name = styled.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`;

export const Slogan = styled.p`
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`;

export const Forma = styled.form`
  margin-top: 24px;
`;

export const InputBoxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
