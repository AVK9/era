import styled from 'styled-components';

export const CalendarBox = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 12px;
  padding: 16px;
  width: 325px;
  height: 273px;
  background: #fff;
  position: absolute;
  z-index: 10;
  bottom: -40px;
  right: 55px;
`;

export const TableHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Span = styled.div`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  /* color: var(--main); */
  white-space: nowrap;
`;

export const CarrentMonthBox = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  /* background-color: blue; */
`;
export const IconWrapper = styled.svg`
  width: 14px;
  height: 14px;
  fill: #407bff;
  transition: fill 500ms ease-in-out;
  cursor: pointer;

  &:hover {
    fill: var(--secondary-color-5);
  }
`;
export const BtnMonthBox = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  /* background-color: black; */
  width: 14px;
  height: 14px;
`;

export const BtnMonthStep = styled.button`
  /* width: 50px; */
  background-color: transparent;
  border: none;
`;
export const DayOfWeekSpan = styled.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  text-align: center;
  /* color: var(--text); */
  text-transform: uppercase;
`;

export const CalendarTab = styled.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
`;
export const CalendarData = styled.div`
  width: 41px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    font-weight: 600;
    font-size: 16px;
  }
`;
