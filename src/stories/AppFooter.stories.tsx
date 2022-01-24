import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { AppFooter } from '@src/AppFooter';

export default {
  component: AppFooter,
  decorators: [withKnobs],
  title: 'Example/AppFooter',
} as ComponentMeta<typeof AppFooter>;

const Template: ComponentStory<typeof AppFooter> = (args) => <AppFooter {...args} />;

export const Static = Template.bind({});

Static.args = {
  countUsers: number('num', 50),
};
