import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the basic react app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Join us/i);
  expect(linkElement).toBeInTheDocument();
});
