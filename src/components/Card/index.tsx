import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

interface CardWrapperProps {
  border?: boolean;
}

const CardWrapper = styled.div<CardWrapperProps>`
  display: inline-flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${oc.white};
  box-shadow: ${oc.gray[2]} 0px 1px 3px 0px
    ${props => props.border && `, ${oc.gray[3]} 0px 0px 0px 1px inset`};
  border-radius: 4px;
`;

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  profileImg?: React.ReactElement;
  border?: boolean;
  title: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { border, profileImg, title, children } = props;

  return (
    <CardWrapper border={border} ref={ref}>
      {profileImg}
      <div>{title}</div>
      {children}
    </CardWrapper>
  );
});

export default Card;
