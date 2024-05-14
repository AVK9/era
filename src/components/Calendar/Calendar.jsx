import { toast } from 'react-toastify';

import {
  CalendarBox,
  CalendarTab,
  CalendarData,
  DayOfWeekSpan,
  Span,
  TableHeaderBox,
} from './Calendar.styled';

import * as dateFns from 'date-fns';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button } from '../common/Button';
import { IconButton } from '../common/IconButton';
import { updateStateHandleDate } from '../../store/action/action';
import { useDispatch } from 'react-redux';

const formatOfManthDig = 'MM';
const formatOfWeek = 'eee';
const formatOfDay = 'd';

export const Calendar = ({ onClose }) => {
  const dispatch = useDispatch();
  const [selectDateUse, setSelectDateUse] = useState(new Date());
  const [selectDayInfo, setSelectDayInfo] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const today = new Date();

  const firstDay = dateFns.startOfMonth(currentDate);
  const lastDay = dateFns.lastDayOfMonth(currentDate);
  const startDate = dateFns.startOfWeek(firstDay, { weekStartsOn: 1 });
  const endDate = dateFns.lastDayOfWeek(lastDay, { weekStartsOn: 1 });
  const totalDate = dateFns.eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const weeks = ((date) => {
    const weeks = [];
    for (let day = 0; day <= 6; day++) {
      weeks.push(date[day]);
    }
    return weeks;
  })(totalDate);

  const isToday = (day) => dateFns.isSameDay(day, today);
  const isSelectedDate = (day) => dateFns.isSameDay(day, selectDateUse);

  const calendrShablon = totalDate.map((day) => {
    const data = `${dateFns.format(day, formatOfDay)}-${dateFns.format(
      day,
      formatOfManthDig
    )}`;
    return {
      id: data,
      date: day,
    };
  });

  const selectDay = (date) => {
    const selectedDate = dateFns.format(date, 'd/MM/yyyy');
    const todayFormat = dateFns.format(today, 'd/MM/yyyy');

    if (selectedDate === todayFormat) {
      dispatch(updateStateHandleDate(selectedDate));
      toast.warn('You have chosen the current day, you need to hurry');
    } else if (date > today) {
      dispatch(updateStateHandleDate(selectedDate));
    } else {
      toast.warn('The date has already passed');
      dispatch(updateStateHandleDate(''));
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 250);
  };
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleClose();
      dispatch(updateStateHandleDate(''));
    }
  };

  return (
    <>
      <CalendarBox onClick={handleBackdropClick}>
        <TableHeaderBox>
          <Button
            next
            onClick={() => setCurrentDate(dateFns.subMonths(currentDate, 1))}
          >
            <IconButton color="#101828" icon="nextRight" />
          </Button>
          <Span>{dateFns.format(currentDate, 'MMMM yyyy')}</Span>
          <Button
            next
            onClick={() => setCurrentDate(dateFns.addMonths(currentDate, 1))}
          >
            <IconButton color="#101828" icon="nextLeft" />
          </Button>
        </TableHeaderBox>
        <CalendarTab
          style={{
            // paddingLeft: 25,
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            // gap: '1px 4px',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          {weeks.map((week) => (
            <DayOfWeekSpan key={nanoid()}>
              {dateFns.format(week, formatOfWeek)}
            </DayOfWeekSpan>
          ))}
          {calendrShablon.map(({ id, date }) => (
            <CalendarData
              onClick={() => {
                setSelectDateUse(date);
                selectDay(date);
                handleClose();
              }}
              key={id}
              style={{
                color: !dateFns.isSameMonth(date, currentDate)
                  ? 'gray'
                  : isToday(date)
                  ? 'green'
                  : isSelectedDate(date)
                  ? 'blue'
                  : dateFns.isWeekend(date, currentDate)
                  ? ''
                  : '',
              }}
            >
              <span
                onClick={() => {
                  setSelectDayInfo({ date });
                }}
              >
                {dateFns.format(date, formatOfDay)}
              </span>
            </CalendarData>
          ))}
        </CalendarTab>
      </CalendarBox>
    </>
  );
};
