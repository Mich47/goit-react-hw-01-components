import styled from 'styled-components';
import { Box } from 'components/Box';

const Avatar = styled.img``;
const Text = styled.p``;
const StatsText = styled.span``;
const StatsList = styled.ul``;
const StatsItem = styled.li``;

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box class="profile">
      <Box class="description">
        <Avatar src={avatar} alt="User avatar" class="avatar" />
        <Text class="name">{username}</Text>
        <Text class="tag">@{tag}</Text>
        <Text class="location">{location}</Text>
      </Box>

      <StatsList class="stats">
        <StatsItem>
          <StatsText class="label">Followers</StatsText>
          <StatsText class="quantity">{stats.followers}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText class="label">Views</StatsText>
          <StatsText class="quantity">{stats.views}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText class="label">Likes</StatsText>
          <StatsText class="quantity">{stats.likes}</StatsText>
        </StatsItem>
      </StatsList>
    </Box>
  );
};
