import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { AppButton } from 'shared/ui/AppButton';
import { ThemeButton } from 'shared/ui/AppButton/ui/AppButton';


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            theme={ThemeButton.CLEAR}
            className={classNames(cls.themeswitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}

        </AppButton>
    )
}
