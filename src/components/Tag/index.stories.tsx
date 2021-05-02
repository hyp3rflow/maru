import { Story } from '@storybook/react';
import React from 'react';
import oc from 'open-color';

import Row from '@src/components/Layout/Row';
import Column from '@src/components/Layout/Column';

import Tag, { TagProps } from '.';

export const Gallery: Story = () => {
  return (
    <>
      <Row margin="8px">
        <Column margin="8px">
          <Tag>Lorem Ipsum</Tag>
        </Column>
        <Column margin="8px">
          <Tag typographyProps={{ fontWeight: 'bold' }}>Lorem Ipsum</Tag>
        </Column>
      </Row>
      <Row margin="8px">
        <Column margin="8px">
          <Tag backgroundColor={oc.orange[7]}>Lorem Ipsum</Tag>
        </Column>
        <Column margin="8px">
          <Tag
            backgroundColor={oc.orange[7]}
            typographyProps={{ fontWeight: 'bold' }}
          >
            Lorem Ipsum
          </Tag>
        </Column>
      </Row>
      <Row margin="8px">
        <Column margin="8px">
          <Tag backgroundColor="transparent" color={oc.gray[9]} outline>
            Lorem Ipsum
          </Tag>
        </Column>
        <Column margin="8px">
          <Tag
            backgroundColor="transparent"
            color={oc.gray[9]}
            typographyProps={{ fontWeight: 'bold' }}
            outline
          >
            Lorem Ipsum
          </Tag>
        </Column>
      </Row>
    </>
  );
};

export const Template: Story<TagProps> = args => {
  return <Tag {...args} />;
};

Template.args = {
  children: 'Lorem Ipsum',
};

export default {
  title: 'components/Tag',
  component: Tag,
};
