import { theme } from '../../theme';
import styled from 'styled-components';
import { color } from 'styled-system';

export const FriendName = styled.p`
  font-size: ${theme.fontSizes.m};
`;

export const FriendStatus = styled.span`
  border-radius: ${theme.radii.round};
  width: 16px;
  height: 16px;
  ${color}
`;

export const FriendAvatar = styled.img`
  border-radius: ${theme.radii.normal};
  width: 64px;
`;

export const FriendListStyled = styled.ul`
  font-family: ${theme.fonts.body};
  width: ${theme.sizes.container}px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  border-right: ${theme.borders.normal};
  border-bottom: ${theme.borders.normal};
  border-color: ${theme.colors.border};
  border-radius: ${theme.radii.normal};
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-top: ${theme.borders.normal};
  border-left: ${theme.borders.normal};
  border-color: ${theme.colors.border};
  ${color}
`;
