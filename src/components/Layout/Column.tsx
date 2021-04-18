import React from 'react';
import styled from 'styled-components';

type ColumnBoxProps = Pick<ColumnProps, 'margin'>;

const ColumnBox = styled.div<ColumnBoxProps>`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};
`;

interface ColumnProps {
  margin: React.CSSProperties['margin'];
}

const Column: React.FC<ColumnProps> = props => {
  const { margin, children } = props;

  return <ColumnBox margin={margin}>{children}</ColumnBox>;
};

export default Column;
