import React, { Children } from 'react';
import styled from 'styled-components';
import oc from 'open-color'
export interface RadioProps extends React.ComponentPropsWithoutRef<'div'> {
  disabled?: boolean;
  checked?: boolean;
  name?: string;
  theme?: themeVariantStyle;
}

interface themeVariantStyle {
  hoverColor: React.CSSProperties['backgroundColor'];
  borderColor: React.CSSProperties['color'];
  textColor: React.CSSProperties['color'];
  radioColor: React.CSSProperties['backgroundColor'];
}

const RadioContentWrapper = styled.div`
  display: block;
  cursor: pointer;
  user-select: none;
  text-align: left;
`;

interface RadioContentProps {
  disabled?: boolean;
  checked: string;
  defaultCheck: string;
}

const RadioWrapper = styled.input.attrs<RadioContentProps>({ type: 'radio' })`
  display: none;
  &:checked + span::after {
    opacity: 1;
  }
  & + span {
    display: inline-block;
    position: relative;
    padding-left: 20px;
    cursor: pointer;
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      border-radius: 50%;
      margin-right: 5px;
      width: 16px;
      height: 16px;
      border: 1px solid #ccc;
      background: #fff;
    }
    &:after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      background: ${props => props.theme.radioColor || oc.blue[4]};
      position: absolute;
      border-radius: 50%;
      opacity: 0;
      top: 3px;
      left: 3px;
      transition: all 0.1s cubic-bezier(0.64, 0.57, 0.67, 1.53);
    }
    &:hover {
      color: red;
    }
  }
`;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { disabled, defaultChecked, name = ' ', children } = props;

  return (
    <RadioContentWrapper {...props}>
      <label>
        <RadioWrapper
          disabled={disabled}
          defaultChecked={defaultChecked}
          name={name}
          ref={ref}
        />
        <span>{children}</span>
      </label>
    </RadioContentWrapper>
  );
});

export default Radio;
