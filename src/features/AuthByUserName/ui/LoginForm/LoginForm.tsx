import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput/ui/AppInput';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginform, {}, [className])}>
            <AppInput
                type="text"
                name="login"
                className={cls.input}
                autoFocus
                placeholder={t('Введите username')}
            />
            <AppInput
                type="text"
                name="password"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <AppButton className={cls.loginBtn}>
                {t('Bойти')}
            </AppButton>
        </div>
    );
};
