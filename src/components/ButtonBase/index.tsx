import React from 'react';
import styled from 'styled-components';

interface ButtonBaseWrapperProps {
  disabled?: boolean;
}

const ButtonBaseWrapper = styled.button<ButtonBaseWrapperProps>`
  display: inline-flex;
  align-items: center;
  background-color: none;
  padding: 0;
  border: 0;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export interface ButtonBaseProps
  extends React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
}

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (props, ref) => {
    const { disabled, children } = props;

    return (
      <ButtonBaseWrapper disabled={disabled} ref={ref} {...props}>
        {children}
      </ButtonBaseWrapper>
    );
  }
);

export default ButtonBase;
