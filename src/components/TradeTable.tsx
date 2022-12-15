import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { users } from '../data/users';
import TimerDisplayRow from './TimerDisplayRow';
import { rowNames } from '../data/users';
import TradeTableRow from './TradeTableRow';

const TradeTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TimerDisplayRow />
          <TableRow>
            <TableCell>
              <p style={{ color: 'blue' }}>Параметры и требования</p>
            </TableCell>
            {users.map((user) => {
              return (
                <TableCell
                  key={user.name}
                  sx={{ color: 'blue', textAlign: 'center' }}
                >
                  {user.name}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowNames.map((rowName) => (
            <TradeTableRow key={rowName} rowName={rowName} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TradeTable;
