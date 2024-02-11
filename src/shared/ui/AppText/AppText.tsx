import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './AppText.module.scss';

export enum AppTextTheme {
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
}

interface AppTextProps {
    className?: string;
    title?: string;
    text?: string | unknown;
    theme?: AppTextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const AppText = memo((props: AppTextProps) => {
    const {
        className,
        title,
        text,
        theme = AppTextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.apptext, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
