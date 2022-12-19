import PropTypes from 'prop-types';
import {
  FriendAvatar,
  FriendItem,
  FriendName,
  FriendStatus,
} from './FriendList.styled';

export const Friend = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendItem>
      {isOnline ? <FriendStatus bg="green" /> : <FriendStatus bg="gray" />}
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
