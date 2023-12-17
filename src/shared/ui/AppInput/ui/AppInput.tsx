import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './AppInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                {...otherProps}
            />
        </div>
    );
});

AppInput.displayName = 'AppInput';
