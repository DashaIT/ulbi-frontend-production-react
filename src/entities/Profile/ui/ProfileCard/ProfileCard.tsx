import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { AppText } from 'shared/ui/AppText/AppText';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton';
import { ButtomTheme } from 'shared/ui/AppButton/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.profilecard, {}, [className])}>
            <div className={cls.header}>
                <AppText title={t('Профиль')} />

                <AppButton
                    className={cls.editBtn}
                    theme={ButtomTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </AppButton>
            </div>

            <div className={cls.data}>
                <AppInput
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <AppInput
                    value={data?.lastName}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
