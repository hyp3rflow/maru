import { Story } from '@storybook/react';
import React from 'react';

import Column from '@src/components/Layout/Column';

import Typography, { TypographyElement, TypographyProps } from '.';

export const Gallery: Story = () => {
  const typographyElements: TypographyElement[] = [
    'h1',
    'h2',
    'h3',
    'p',
    'span',
  ];
  return (
    <>
      {typographyElements.map((element, index) => (
        <Column margin="8px" key={index}>
          <Typography element={element}>Lorem Ipsum</Typography>
        </Column>
      ))}
    </>
  );
};

export const Template: Story<TypographyProps> = args => {
  return <Typography {...args} />;
};

Template.args = {
  children: 'Lorem Ipsum',
};

export default {
  title: 'components/Typography',
  component: Typography,
};
