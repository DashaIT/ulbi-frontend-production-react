import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton } from '@/shared/ui/deprecated/AppButton';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <AppButton onClick={reloadPage}>{t('Обновить страницу')}</AppButton>
        </div>
    );
};
