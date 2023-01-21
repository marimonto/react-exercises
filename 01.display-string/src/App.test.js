import { render, screen } from '@testing-library/react';
import App from './App';

test('should render JSX text', () => {
  render(<App />);
  const stringText = screen.getByText(/JSX is cool!/i);
  expect(stringText).toBeInTheDocument();
});
