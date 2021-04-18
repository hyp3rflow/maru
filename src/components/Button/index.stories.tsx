import { Story } from '@storybook/react';
import React from 'react';

import Column from '@src/components/Layout/Column';
import Row from '@src/components/Layout/Row';

import Button, { ButtonVariant } from '.';

export const Gallery: Story = () => {
  const fontWeights: React.CSSProperties['fontWeight'][] = ['normal', 'bold'];
  const variants: ButtonVariant[] = [
    'default',
    'primary',
    'secondary',
    'correct',
  ];

  return (
    <>
      {fontWeights.map((fontWeight, index) => (
        <Row margin="8px" key={index}>
          {variants.map((variant, idx) => (
            <Column key={`${fontWeight}-${idx}`} margin="8px">
              <Button fontWeight={fontWeight} variant={variant}>
                Lorem Ipsum
              </Button>
            </Column>
          ))}
        </Row>
      ))}
      {fontWeights.map((fontWeight, index) => (
        <Row margin="8px" key={index}>
          {variants.map((variant, idx) => (
            <Column key={`${fontWeight}-${idx}`} margin="8px">
              <Button fontWeight={fontWeight} variant={variant} disabled>
                Lorem Ipsum
              </Button>
            </Column>
          ))}
        </Row>
      ))}
    </>
  );
};

export default {
  title: 'components/Button',
  component: Button,
};
