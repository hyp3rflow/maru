import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const CardWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${oc.white};
  box-shadow: ${oc.gray[2]} 0px 1px 3px 0px;
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
