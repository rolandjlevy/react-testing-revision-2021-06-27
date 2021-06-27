import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import axios from 'axios';

describe('Should render page elements and mock API calls', () => {
  test('renders learn react link', async () => {
    render(<App />);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    // test 'Toggle' button
    const btn = screen.getByRole('button', { name: 'Toggle'});
    userEvent.click( btn );
    screen.getByRole('heading', { name: '🚀'});

    // Mock test
    const axiosMock = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: {
      "id":7,
      "name":"Emily Levy",
      "username":"EJLevy",
      "email":"ejlevy@gmail.com",
    }});

    userEvent.click(
      screen.getByRole('button', { name: 'Get user'})
    )
    await waitFor(() => expect(axiosMock).toHaveBeenCalledTimes(1));
    screen.debug();
    // screen.logTestingPlaygroundURL();
  
    // test 'Learn React' link
    screen.getByRole('link', { name: 'Learn React'});
    expect(
      screen.getByRole('link', { name: 'Learn React' })
    ).toHaveAttribute('href', 'https://reactjs.org');
  });
});