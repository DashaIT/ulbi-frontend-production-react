import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { AppButton } from 'shared/ui/AppButton';
import { ThemeButton } from 'shared/ui/AppButton/ui/AppButton';
interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en': 'ru')
    }
return (    
        <AppButton 
            className={classNames(cls.langswitcher, {}, [className])}
            theme={ThemeButton.CLEAR} onClick={toggle}>
                {t('Язык')}
        </AppButton>
    )
}
