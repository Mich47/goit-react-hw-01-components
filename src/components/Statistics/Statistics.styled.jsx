import { theme } from '../../theme';
import styled from 'styled-components';
import { color, typography } from 'styled-system';

export const StatTitle = styled.h2`
  font-size: ${theme.fontSizes.m};
  color: ${theme.colors.gray};
  text-transform: uppercase;
  text-align: center;
  margin-top: ${theme.space[4]}px;
  margin-bottom: ${theme.space[4]}px;
`;

export const StatText = styled.span`
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.white};
  ${typography}
`;
export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-basis: 100%;
  padding: 16px 0;

  border-top: ${theme.borders.normal};
  border-left: ${theme.borders.normal};
  border-color: ${theme.colors.border};
  ${color}
`;
