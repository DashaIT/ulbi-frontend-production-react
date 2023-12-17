import { classNames } from 'shared/lib/classNames/classNames';
import { AppModal } from 'shared/ui/AppModal/AppModal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <AppModal
            className={classNames(cls.loginmodal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </AppModal>
    );
};