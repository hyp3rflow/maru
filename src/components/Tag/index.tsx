import oc from 'open-color';
import React from 'react';
import styled from 'styled-components';

import Typography, { TypographyProps } from '../Typography';

interface TagWrapperProps {
  backgroundColor?: React.CSSProperties['backgroundColor'];
  color?: React.CSSProperties['color'];
  outline?: boolean;
  outlineColor?: React.CSSProperties['color'];
}

const TagWrapper = styled.div<TagWrapperProps>`
  display: inline-flex;
  color: ${props => props.color ?? (props.outline ? oc.gray[9] : 'white')};
  background-color: ${props =>
    props.backgroundColor ?? (props.outline ? 'transparent' : oc.gray[7])};
  padding: 8px 14px;
  border-radius: 9999px;
  border: transparent 1px solid;
  border-color: ${props => props.outline && (props.outlineColor ?? oc.gray[5])};
`;

export interface TagProps extends React.ComponentPropsWithoutRef<'div'> {
  typographyProps?: TypographyProps;
  backgroundColor?: React.CSSProperties['backgroundColor'];
  color?: React.CSSProperties['color'];
  outline?: boolean;
  outlineColor?: React.CSSProperties['color'];
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ typographyProps, children, ...props }, ref) => {
    return (
      <TagWrapper ref={ref} {...props}>
        <Typography {...typographyProps}>{children}</Typography>
      </TagWrapper>
    );
  }
);

export default Tag;
