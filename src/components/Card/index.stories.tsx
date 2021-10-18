import { Story } from '@storybook/react';
import React from 'react';

import Card, { CardProps } from '.';

export const Gallery: Story = () => {
  return <Card title="Lorem Ipsum">Lorem Ipsum</Card>;
};

export const Template: Story<CardProps> = args => {
  return <Card {...args}>Lorem Ipsum</Card>;
};

Template.args = {
  title: 'Lorem Ipsum',
};

export default {
  title: 'components/Card',
  component: Card,
};
