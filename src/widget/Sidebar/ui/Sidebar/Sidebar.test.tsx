import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widget/Sidebar';

describe('Sidebar', () => {
    test('with only first param', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
