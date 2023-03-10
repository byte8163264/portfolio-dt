import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from './Sidebar';

export default {
  title: 'Components/sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar />;

export const Primary = Template.bind({});
