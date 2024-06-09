import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppText, AppTextTheme, TextSize } from './AppText';

export default {
    title: 'shared/AppText',
    component: AppText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppText>;

const Template: ComponentStory<typeof AppText> = (args) => <AppText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    theme: AppTextTheme.ERROR,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.S,
};
