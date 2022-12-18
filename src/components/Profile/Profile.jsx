import { Box } from 'components/Box';
import { Description } from './Description';
import { Stats } from './Stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      fontFamily="body"
      width="container"
      m="0 auto"
      bg="white"
      border=" 1px solid #e4e9f0"
      borderRadius="4px"
    >
      <Description
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />

      <Stats stats={stats} />
    </Box>
  );
};
