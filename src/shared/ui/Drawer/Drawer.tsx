import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { AppPortal } from '../AppPortal/AppPortal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <AppPortal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </AppPortal>
    );
});
