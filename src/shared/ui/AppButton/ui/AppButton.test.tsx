import { render, screen } from '@testing-library/react';
import { AppButton } from 'shared/ui/AppButton';
import { ButtonTheme } from './AppButton';

describe('Button', () => {
    test('Test render', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<AppButton theme={ButtonTheme.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
