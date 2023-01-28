import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { AllFriends, Friend } from './FriendsList.styled';

export const FriendList = ({ friends }) => (
  <AllFriends>
    {friends.map(friend => (
      <Friend key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </Friend>
    ))}
  </AllFriends>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
