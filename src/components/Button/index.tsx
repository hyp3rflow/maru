import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children } = props;

  return <button ref={ref}>{children}</button>;
});

export default Button;
