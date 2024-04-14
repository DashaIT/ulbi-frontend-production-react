import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors/addCommentForm';
import { addCommentformActions, addCommentformReducer } from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
   className?: string;
   onSendCommentForm: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentformReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
    const { className, onSendCommentForm } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value) => {
        dispatch(addCommentformActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendCommentForm(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendCommentForm, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.addCommentForm, {}, [className])}>
                <AppInput
                    className="input"
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <AppButton
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </AppButton>
            </div>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
