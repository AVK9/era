import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 30px;
  line-height: 125%;
  margin-top: 40px;
  /* color: var(--main); */
  color: ${(props) => props.color};
`;

export const Title = (props) => {
  return <StyledTitle {...props} />;
};
