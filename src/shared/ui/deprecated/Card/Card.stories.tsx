import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppText } from '../AppText/AppText';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <AppText title="test" text="text text" />,
};
