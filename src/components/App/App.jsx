import { Profile } from '../profile/Profile';
import { Statistics } from '../statistics/Statistics';
import { FriendList } from '../friends/FriendList';
import { TransactionHistory } from '../transactions/TransactionHistory';
import { Container } from './App.styled';
import user from '../profile/user.json';
import data from '../statistics/data.json';
import friends from '../friends/friends.json';
import transactions from '../transactions/transactions.json';

export const App = () => (
  <Container>
    <Profile key={user.username} profile={user} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList items={friends} />
    <TransactionHistory data={transactions} />
  </Container>
);
