import { render, screen } from '@testing-library/react';
import { AppButton } from 'shared/ui/AppButton';
import { ButtomTheme } from './AppButton';

describe('Button', () => {
    test('Test render', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<AppButton theme={ButtomTheme.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
