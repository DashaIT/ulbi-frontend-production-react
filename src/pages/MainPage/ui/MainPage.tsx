import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppInput } from '@/shared/ui/AppInput';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (value: string) => {
        setValue(value);
    };
    return (
        <div>
            {t('Главная страница')}
            <AppInput
                value={value}
                onChange={onChange}
                placeholder={t('Введите текст')}
            />
        </div>
    );
};

export default MainPage;
