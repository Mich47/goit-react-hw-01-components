import { theme } from '../../theme';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

export const Text = styled.p`
  margin: 0;
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.gray};
  ${space}
  ${color}
  ${typography}
`;
export const StatsText = styled.span`
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.gray};
  ${color}
  ${typography}
`;
export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-basis: 33.33%;
  padding: 24px 0;
  background-color: #f3f6f9;
  border-top: 1px solid #e4e9f0;
  border-left: 1px solid #e4e9f0;
`;
export const StyledAvatar = styled.img`
  border-radius: ${theme.radii.round};
  width: 50%;
  margin-bottom: 24px;
  ${space}
`;
