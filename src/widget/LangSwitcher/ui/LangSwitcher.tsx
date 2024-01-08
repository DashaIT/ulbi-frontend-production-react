import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton';
import { ButtomTheme } from 'shared/ui/AppButton/ui/AppButton';

interface LangSwitcherProps {
    className?: string,
    short?: boolean,
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <AppButton
            className={classNames('', {}, [className])}
            theme={ButtomTheme.CLEAR}
            onClick={toggle}
        >
            {short && t('Короткий язык')}
            {!short && t('Язык')}
        </AppButton>
    );
};
