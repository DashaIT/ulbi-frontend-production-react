import { classNames } from '@/shared/lib/classNames/classNames';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { AppButton } from '@/shared/ui/AppButton';
import { ButtonTheme } from '@/shared/ui/AppButton/ui/AppButton';
import { memo } from 'react';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.themeswitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}

        </AppButton>
    );
});
