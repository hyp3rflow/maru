import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'p' | 'span';

const typographyElementMap: Record<
  TypographyElement,
  keyof JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
  span: 'span',
};

export interface TypographyProps
  extends React.ComponentPropsWithoutRef<TypographyElement> {
  color?: React.CSSProperties['color'];
  fontWeight?: React.CSSProperties['fontWeight'];
  fontSize?: React.CSSProperties['fontSize'];
  element?: TypographyElement;
}

type TypographyWrapperProps = Omit<TypographyProps, 'element'>;

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (props, ref) => {
    const { element = 'p', fontWeight, fontSize, children } = props;
    const Element = typographyElementMap[element];

    const TypographyWrapper = styled(Element)<TypographyWrapperProps>`
      color: ${styleProps => styleProps.color ?? oc.gray[9]};
      font-weight: ${styleProps => styleProps.fontWeight};
      font-size: ${styleProps => styleProps.fontSize};
    `;

    return (
      <TypographyWrapper
        fontWeight={fontWeight}
        fontSize={fontSize}
        ref={ref}
        {...props}
      >
        {children}
      </TypographyWrapper>
    );
  }
);

export default Typography;
