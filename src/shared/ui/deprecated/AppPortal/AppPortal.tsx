import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

interface AppPortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const AppPortal = (props: AppPortalProps) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
