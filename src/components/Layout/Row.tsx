import React from 'react';
import styled from 'styled-components';

type RowBoxProps = Pick<RowProps, 'margin'>;

const RowBox = styled.div<RowBoxProps>`
  display: flex;
  flex-direction: row;
  margin: ${props => props.margin};
`;

interface RowProps {
  margin: React.CSSProperties['margin'];
}

const Row: React.FC<RowProps> = props => {
  const { margin, children } = props;

  return <RowBox margin={margin}>{children}</RowBox>;
};

export default Row;
