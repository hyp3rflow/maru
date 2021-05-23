import { Story } from '@storybook/react';
import React from 'react';
import oc from 'open-color';

import Radio, { RadioProps, themeVariantStyle } from '.';
import Column from '../Layout/Column';
import Row from '../Layout/Row';

const customTheme: themeVariantStyle[] = [
  {},
  {
    radioColor: oc.red[5],
    disabledColor: oc.gray[2],
  },
  {
    radioColor: oc.green[5],
  },
];
const defaultChecks: boolean[] = [true, false, false, false];

export const Gallery: Story = () => {
  return (
    <>
      {defaultChecks.map((defaultChecked, index) => (
        <Row margin="8px" key={index}>
          {customTheme.map((variant, idx) => (
            <Column key={`${defaultChecked}-${idx}`} margin="8px">
              <Radio
                defaultChecked={defaultChecked}
                theme={variant}
                name={idx.toString()}
                disabled={index === 3}
              >
                Lorem Ipsum
              </Radio>
            </Column>
          ))}
        </Row>
      ))}
    </>
  );
};

export const Template: Story<RadioProps> = args => {
  return <Radio {...args}>{args.children}</Radio>;
};

Template.args = {
  children: 'Lorem Ipsum',
};

export default {
  title: 'components/Radio',
  component: Radio,
};
