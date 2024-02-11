import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppText } from 'shared/ui/AppText/AppText';
import { AppButton } from 'shared/ui/AppButton';
import { ButtonTheme } from 'shared/ui/AppButton/ui/AppButton';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profilepageheader, {}, [className])}>
            <AppText title={t('Профиль')} />

            {readonly ? (
                <AppButton
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </AppButton>
            ) : (
                <>
                    <AppButton
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </AppButton>
                    <AppButton
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSave}
                    >
                        {t('Сохранить')}
                    </AppButton>
                </>
            )}
        </div>
    );
};
