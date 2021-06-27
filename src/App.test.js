import { render, screen } from '@testing-library/react';
import App from './App';

describe('Should render page elements and mock API calls', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    screen.getByRole('link', { name: 'Learn React'});
  });
});