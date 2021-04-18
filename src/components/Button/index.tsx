import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import ButtonBase, { ButtonBaseProps } from '../ButtonBase';

interface ButtonWrapperProps extends Omit<ButtonProps, 'variant'> {
  theme: VariantStyle;
}

const ButtonWrapper = styled(ButtonBase)<ButtonWrapperProps>`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  padding: ${props => props.padding ?? '8px'};
  border: none;
  border-radius: 4px;
  box-shadow: ${oc.gray[2]} 0px 1px 3px 0px;
  font-weight: ${props => props.fontWeight};
  transition: background-color 0.1s ease;

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.hoverColor};
  }

  &:active:not(:disabled) {
    background-color: ${props => props.theme.activeColor};
  }

  &:disabled {
    opacity: 0.6;
    filter: blur(0.3px);
  }
`;

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'correct';

export interface ButtonProps extends ButtonBaseProps {
  variant?: ButtonVariant;
  padding?: React.CSSProperties['padding'];
  fontWeight?: React.CSSProperties['fontWeight'];
}

interface VariantStyle {
  backgroundColor: React.CSSProperties['backgroundColor'];
  hoverColor: React.CSSProperties['backgroundColor'];
  activeColor: React.CSSProperties['backgroundColor'];
  color: React.CSSProperties['color'];
}

const buttonVariantMap: Record<ButtonVariant, VariantStyle> = {
  default: {
    backgroundColor: oc.gray[0],
    hoverColor: oc.gray[1],
    activeColor: oc.gray[2],
    color: oc.gray[9],
  },
  primary: {
    backgroundColor: oc.blue[1],
    hoverColor: oc.blue[2],
    activeColor: oc.blue[3],
    color: oc.blue[7],
  },
  secondary: {
    backgroundColor: oc.red[1],
    hoverColor: oc.red[2],
    activeColor: oc.red[3],
    color: oc.red[7],
  },
  correct: {
    backgroundColor: oc.green[1],
    hoverColor: oc.green[2],
    activeColor: oc.green[3],
    color: oc.green[7],
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'default',
      padding,
      fontWeight = 'normal',
      children,
    } = props;
    const buttonTheme = buttonVariantMap[variant];

    return (
      <ButtonWrapper
        padding={padding}
        theme={buttonTheme}
        fontWeight={fontWeight}
        ref={ref}
        {...props}
      >
        {children}
      </ButtonWrapper>
    );
  }
);

export default Button;
