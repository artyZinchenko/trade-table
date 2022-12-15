import { Typography } from '@mui/material';
import { tradeObject } from '../data/users';
import dayjs from 'dayjs';

const Header = () => {
  return (
    <div>
      <Typography variant='h6'>
        Ход торгов{' '}
        <strong>{`Тестовые торги на аппарат ${tradeObject.name} (${dayjs(
          tradeObject.date
        ).format('DD-MM-YYYY HH.mm')})`}</strong>
      </Typography>
      <hr />
      <Typography variant='subtitle2'>
        Уважаемые участники, во время вашего хода вы можете изменить параметры
        торгов, указанных в таблице:
      </Typography>
    </div>
  );
};

export default Header;
