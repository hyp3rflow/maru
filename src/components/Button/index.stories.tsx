import {Story} from '@storybook/react';
import React from 'react';

import Button from '.';

export const Gallery: Story = () => {
  return <Button>Lorem Ipsum</Button>
}

export default {
  title: 'components/Button',
  component: Button,
}