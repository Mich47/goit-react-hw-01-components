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
  flex-basis: 100%;
  padding: 20px 0;
  background-color: ${theme.colors.muted};
  border-top: ${theme.borders.normal};
  border-left: ${theme.borders.normal};
  border-color: ${theme.colors.border};
`;
export const Avatar = styled.img`
  border-radius: ${theme.radii.round};
  width: 50%;
  margin-bottom: 24px;
  ${space}
`;
