import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppModal } from './AppModal';

export default {
    title: 'shared/AppModal',
    component: AppModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppModal>;

const Template: ComponentStory<typeof AppModal> = (args) => <AppModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, nemo molestias, quia illo eligendi consequuntur dignissimos ',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, nemo molestias, quia illo eligendi consequuntur dignissimos ',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
