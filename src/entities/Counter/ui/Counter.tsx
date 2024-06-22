import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@/shared/ui/deprecated/AppButton';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { decrement, increment, add } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <AppButton onClick={handleAddFive} data-testid="increment-btn5">
                {t('add5')}
            </AppButton>
            <AppButton onClick={handleInc} data-testid="increment-btn">
                {t('increment')}
            </AppButton>
            <AppButton data-testid="decrement-btn" onClick={handleDec}>
                {t('decrement')}
            </AppButton>
        </div>
    );
};
