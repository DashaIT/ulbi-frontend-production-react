import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@/shared/ui/AppButton';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(CounterActions.increment());
    };

    const decrement = () => {
        dispatch(CounterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <AppButton
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </AppButton>
            <AppButton
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t('decrement')}

            </AppButton>
        </div>
    );
};
