import PropTypes from 'prop-types';
import { StatsText, StatsList, StatsItem } from './Profile.styled';

export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <StatsList>
      <StatsItem>
        <StatsText>Followers</StatsText>
        <StatsText fontSize="m" fontWeight="bold" color="black">
          {followers}
        </StatsText>
      </StatsItem>
      <StatsItem>
        <StatsText>Views</StatsText>
        <StatsText fontSize="m" fontWeight="bold" color="black">
          {views}
        </StatsText>
      </StatsItem>
      <StatsItem>
        <StatsText>Likes</StatsText>
        <StatsText fontSize="m" fontWeight="bold" color="black">
          {likes}
        </StatsText>
      </StatsItem>
    </StatsList>
  );
};

// Stats.propTypes = {
//   imgUrl: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };
