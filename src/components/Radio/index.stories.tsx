import { Story } from '@storybook/react';
import React from 'react';

import Radio, { RadioProps } from '.';

export const Gallery: Story = () => {
  return (
    <>
      <Radio>Lorem Ipsum</Radio>
      <Radio defaultChecked>Lorem Ipsum</Radio>
      <Radio>Lorem Ipsum</Radio>
      <Radio>Lorem Ipsum</Radio>
      <Radio>Lorem Ipsum</Radio>
      <Radio>Lorem Ipsum</Radio>
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
