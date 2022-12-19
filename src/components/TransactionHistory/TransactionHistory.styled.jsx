import { theme } from '../../theme';
import styled from 'styled-components';
import { color } from 'styled-system';

export const TableHead = styled.thead`
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.white};

  text-transform: uppercase;
  text-align: center;
  background-color: ${theme.colors.backgroundTableHead};
`;

export const TableBody = styled.tbody`
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.gray};
`;

export const TableRow = styled.tr`
  ${color}
`;

export const TableHeader = styled.th`
  padding: 8px;
  border: ${theme.borders.normal};
  border-color: ${theme.colors.border};
`;
export const TableData = styled.td`
  text-transform: capitalize;
  text-align: center;
  padding: 8px;
  border: ${theme.borders.normal};
  border-color: ${theme.colors.border};
`;

export const Table = styled.table`
  font-family: ${theme.fonts.body};
  width: ${theme.sizes.table}px;
  margin: 20px auto;
  padding: 0;
  border-collapse: collapse;

  border-radius: ${theme.radii.normal};
`;
