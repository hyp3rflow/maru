import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(20, 20, 20, 2%) 2px 8px 12px 0px,
    rgba(20, 20, 20, 2%) 0px 1px 3px 0px;
  border-radius: 4px;
`;

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  profileImg?: React.ReactElement;
  title: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { profileImg, title, children } = props;

  return (
    <CardWrapper ref={ref}>
      {profileImg}
      <div>{title}</div>
      {children}
    </CardWrapper>
  );
});

export default Card;
