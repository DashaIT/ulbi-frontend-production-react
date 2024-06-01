import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './AppText.module.scss';

export enum AppTextTheme {
    INVERTED = 'inverted',
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    S = 'size_s',
}

interface AppTextProps {
    className?: string;
    title?: string;
    text?: string | unknown;
    theme?: AppTextTheme;
    align?: TextAlign;
    size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const AppText = memo((props: AppTextProps) => {
    const {
        className,
        title,
        text,
        theme = AppTextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
