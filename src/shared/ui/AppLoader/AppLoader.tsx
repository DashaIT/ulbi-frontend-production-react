import { classNames } from '@/shared/lib/classNames/classNames';
import './AppLoader.scss';

interface LoaderProps {
    className?: string;
}

export const AppLoader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
