import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput/ui/AppInput';
import { ButtomTheme } from 'shared/ui/AppButton/ui/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { AppText, AppTextTheme } from 'shared/ui/AppText/AppText';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.loginform, {}, [className])}>
            <AppText title={t('Форма авторизации')} />
            {error && <AppText text={t('Неправильный логин или пароль')} theme={AppTextTheme.ERROR} />}
            <AppInput
                type="text"
                name="login"
                className={cls.input}
                autoFocus
                placeholder={t('Введите username')}
                onChange={onChangeUserName}
                value={username}
            />
            <AppInput
                type="text"
                name="password"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <AppButton
                className={cls.loginBtn}
                theme={ButtomTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Bойти')}
            </AppButton>
        </div>
    );
});

LoginForm.displayName = 'LoginForm';
