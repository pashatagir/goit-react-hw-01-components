import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friends/FriendList';
import TransactionHistory from './transactions/TransactionHistory';
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friends/friends.json';
import transactions from './transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile key={user.username} profile={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <TransactionHistory data={transactions} />
    </div>
  );
};
