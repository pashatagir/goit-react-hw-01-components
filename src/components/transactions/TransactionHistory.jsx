import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  HeadRow,
  HeadCell,
  TableBody,
  BodyRow,
  BodyCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead>
      <HeadRow>
        <HeadCell>Type</HeadCell>
        <HeadCell>Amount</HeadCell>
        <HeadCell>Currency</HeadCell>
      </HeadRow>
    </TableHead>
    <TableBody>
      {items.map(el => (
        <BodyRow key={el.id}>
          <BodyCell>{el.type}</BodyCell>
          <BodyCell>{el.amount}</BodyCell>
          <BodyCell>{el.currency}</BodyCell>
        </BodyRow>
      ))}
    </TableBody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
