import { Story } from '@storybook/react';
import React from 'react';

import Radio, { RadioProps } from '.';

export const Gallery: Story = () => {
  return (
    <>
      <Radio>안녕</Radio>
    </>
  );
};

export const Template: Story<RadioProps> = args => {
  return <Radio {...args}>{args.children}</Radio>;
};

export default {
  title: 'components/Radio',
  component: Radio,
};
