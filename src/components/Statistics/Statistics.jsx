import { Box } from 'components/Box';
import { StatTitle, StatList, StatItem, StatText } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box as="section">
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <StatText>{label}</StatText>
              <StatText>{percentage}</StatText>
            </StatItem>
          );
        })}
      </StatList>
    </Box>
  );
};
