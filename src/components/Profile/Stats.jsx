import { StatsText, StatsList, StatsItem } from './Profile.styled';

export const Stats = ({ stats: { followers, views, likes } }) => {
  // console.log('stats ', stats);
  return (
    // class="stats"
    <StatsList>
      <StatsItem>
        {/* class="label" */}
        <StatsText fontSize="s" color="#768696">
          Followers
        </StatsText>
        {/* class="quantity" */}
        <StatsText fontSize="m" fontWeight="bold">
          {followers}
        </StatsText>
      </StatsItem>
      <StatsItem>
        <StatsText fontSize="s" color="#768696">
          Views
        </StatsText>
        <StatsText fontSize="m" fontWeight="bold">
          {views}
        </StatsText>
      </StatsItem>
      <StatsItem>
        <StatsText fontSize="s" color="#768696">
          Likes
        </StatsText>
        <StatsText fontSize="m" fontWeight="bold">
          {likes}
        </StatsText>
      </StatsItem>
    </StatsList>
  );
};
