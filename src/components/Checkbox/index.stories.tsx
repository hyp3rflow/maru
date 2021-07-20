import { Story } from '@storybook/react';
import React from 'react';

import Column from '@src/components/Layout/Column';
import Row from '@src/components/Layout/Row';

import Checkbox, { CheckboxProps, CheckboxVariant } from '.';

export const Gallery: Story = () => {
  const defaultChecks: boolean[] = [true, false];
  const variants: CheckboxVariant[] = ['blue', 'green', 'red'];

  return (
    <>
      {defaultChecks.map((defaultChecked, index) => (
        <Row margin="8px" key={index}>
          {variants.map((variant, idx) => (
            <Column key={`${defaultChecked}-${idx}`} margin="8px">
              <Checkbox isDefaultChecked={defaultChecked} boxTheme={variant}>
                Lorem Ipsum
              </Checkbox>
            </Column>
          ))}
        </Row>
      ))}
      {defaultChecks.map((defaultChecked, index) => (
        <Row margin="8px" key={index}>
          {variants.map((variant, idx) => (
            <Column key={`${defaultChecked}-${idx}`} margin="8px">
              <Checkbox
                isDefaultChecked={defaultChecked}
                boxTheme={variant}
                isDisabled={true}
              >
                Lorem Ipsum
              </Checkbox>
            </Column>
          ))}
        </Row>
      ))}
    </>
  );
};

export const Template: Story<CheckboxProps> = args => {
  return <Checkbox {...args}>{args.children}</Checkbox>;
};

Template.args = {
  boxTheme: 'red',
  isDefaultChecked: true,
  children: 'Lorem Ipsum',
};

export default {
  title: 'components/Checkbox',
  component: Checkbox,
};
