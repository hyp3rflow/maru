import React, { Children } from 'react';
import styled from 'styled-components';

interface RadioWrapperProps {
  disabled?: boolean;
}

export interface RadioProps extends React.ComponentPropsWithoutRef<'input'> {
  disabled?: boolean;
}

const RadioWrapper = styled.input<RadioWrapperProps>`
  color: red;
`;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { disabled, children } = props;

  return (
    <RadioWrapper type="radio" disabled={disabled} ref={ref} {...props}>
      {children}
    </RadioWrapper>
  );
});

export default Radio;
