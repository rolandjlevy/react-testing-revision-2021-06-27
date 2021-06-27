import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Should render page elements and mock API calls', () => {
  test('renders learn react link', () => {
    render(<App />);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    // test 'Toggle' button
    const btn = screen.getByRole('button', { name: 'Toggle'});
    userEvent.click( btn );
    screen.getByRole('heading', { name: '🚀'});
  
    // test 'Learn React' link
    screen.getByRole('link', { name: 'Learn React'});
    expect(
      screen.getByRole('link', { name: 'Learn React' })
    ).toHaveAttribute('href', 'https://reactjs.org');
  });
});