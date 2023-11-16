import { classNames } from 'shared/lib/classNames/classNames';
import { AppModal } from 'shared/ui/AppModal/AppModal';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton';
import { ButtomTheme } from 'shared/ui/AppButton/ui/AppButton';
import cls from './Navbar.module.scss';
import { useCallback, useState } from 'react';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppButton
                theme={ButtomTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </AppButton>
            <AppModal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quam, nemo molestias, quia illo eligendi consequuntur
                dignissimos at exercitationem eveniet voluptatum in distinctio,
                id officiis! Iste quod facere voluptatum quos?
            </AppModal>
        </div>
    );
};
