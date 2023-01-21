import { render, screen } from '@testing-library/react';
import Child from './Child';
import Parent from './Parent';

test('renders children into the parent', () => {
    render(<Parent><Child/></Parent>);
    const childrenText = screen.getByText(/This is children content/i);
    expect(childrenText).toBeInTheDocument();
});