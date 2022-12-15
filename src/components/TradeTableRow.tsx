import { rowNames, users } from '../data/users';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ObjectKey } from '../types';

export interface TechProps {
  bool: boolean;
}

const TechStandards = ({ bool }: TechProps) => {
  return bool ? <p>Да</p> : <p>-</p>;
};

export interface RowProps {
  rowName: string;
}

const TradeTableRow = ({ rowName }: RowProps) => {
  const index = rowNames.indexOf(rowName);

  const userObjectMap = new Map();
  userObjectMap.set(0, 'higherTechStandards');
  userObjectMap.set(1, 'devTime');
  userObjectMap.set(2, 'guarantee');
  userObjectMap.set(3, 'paymentConditions');
  userObjectMap.set(4, 'cost');

  const userPropKey = userObjectMap.get(index) as ObjectKey;
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component='th' scope='row'>
        <p>{rowName}</p>
      </TableCell>
      {users.map((element) => {
        return (
          <TableCell key={element.name} align='center'>
            {userPropKey === 'higherTechStandards' ? (
              <TechStandards bool={element.higherTechStandards} />
            ) : (
              <p> {element[userPropKey]}</p>
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TradeTableRow;
