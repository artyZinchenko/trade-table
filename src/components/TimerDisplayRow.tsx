import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { timerObject, users } from '../data/users';
import { User } from '../types';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { reducer } from '../reducer';
import { useReducer, useEffect } from 'react';
import { reduceTime, updateTime } from '../reducer';

const TimerDisplayRow = () => {
  const [state, dispatch] = useReducer(reducer, {
    timePassed: 0,
    timeAtStart: new Date(),
    user: 0,
  });

  const timeLeft = Math.round(
    (timerObject.timeLimit - state.timePassed) / 1000
  );

  useEffect(() => {
    setInterval(() => {
      dispatch(reduceTime(new Date()));
    }, 1000);
  }, []);

  useEffect(() => {
    if (timeLeft < 0) {
      dispatch(updateTime(0, new Date(), nextUser()));
    }
  });

  const nextUser = () => {
    const maxNumber = users.length;
    let next = state.user + 1;
    if (next >= maxNumber) next = 0;
    return next;
  };

  //таймер будет отображаться без юзеров в комнате
  useEffect(() => {
    if (users.length === 0) {
      users.push({} as User);
    }
  }, []);

  const numberToTime = () => {
    const minutes = Math.abs(Math.floor(timeLeft / 60));
    const seconds = Math.abs(Math.floor(timeLeft - minutes * 60));
    const formatedMinutes = minutes.toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });
    const formatedSeconds = seconds.toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });
    return `${formatedMinutes}:${formatedSeconds}`;
  };

  const timeLeftDisplay = numberToTime();

  return (
    <TableRow>
      <TableCell>
        <p style={{ color: 'blue', fontSize: '1.4em', marginBlock: '0' }}>
          ХОД
        </p>
      </TableCell>
      {users.map((element) => {
        return state.user === users.indexOf(element) ? (
          <TableCell
            key={element.name}
            sx={{
              backgroundColor: 'rgba(139, 0, 0, 0.2)',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '30px',
              paddingBlock: '10px',
            }}
          >
            <p style={{ fontSize: '1.3em', marginBlock: '10px' }}>
              {timeLeftDisplay}
            </p>
            <HourglassBottomIcon sx={{ color: 'darkred', fontSize: '1.4em' }} />
          </TableCell>
        ) : (
          <TableCell key={element.name}>{null}</TableCell>
        );
      })}
    </TableRow>
  );
};

export default TimerDisplayRow;
