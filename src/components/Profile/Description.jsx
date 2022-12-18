import { Box } from 'components/Box';
import { Avatar } from './Avatar';
import { Text } from './Profile.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" p={5}>
      <Avatar avatar={avatar} />
      <Text color="black" fontSize="m" fontWeight="bold">
        {username}
      </Text>
      {/* class="name"*/}
      <Text>@{tag}</Text>
      {/*class="tag" */}
      <Text>{location}</Text>
      {/* class="location" */}
    </Box>
  );
};