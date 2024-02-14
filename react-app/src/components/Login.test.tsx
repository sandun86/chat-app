import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

jest.mock('axios');

describe('Login component', () => {
  beforeEach(() => {
    // Clear any localStorage set during tests
    localStorage.clear();
  });

//   test('renders login form', () => {
//     render(<Login setToken={() => {}} />);
//     expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
//     expect(screen.getByText(/login/i)).toBeInTheDocument();
//   });

//   test('handles input changes', () => {
//     render(<Login setToken={() => {}} />);
//     fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
//     fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });
//     expect(screen.getByLabelText(/username/i).value).toBe('testuser');
//     expect(screen.getByLabelText(/password/i).value).toBe('testpassword');
//   });

//   test('handles form submission - successful login', async () => {
//     axios.post.mockResolvedValueOnce({ data: { token: 'fake-token' } });

//     const setTokenMock = jest.fn();
//     render(
//       <BrowserRouter>
//         <LoginForm setToken={setTokenMock} />
//       </BrowserRouter>
//     );

//     fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
//     fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });
//     fireEvent.click(screen.getByText(/login/i));

//     await waitFor(() => expect(setTokenMock).toHaveBeenCalledWith('fake-token'));
//     expect(localStorage.getItem('token')).toBe('fake-token');
//   });

//   test('handles form submission - unsuccessful login', async () => {
//     axios.post.mockRejectedValueOnce({});

//     render(<LoginForm setToken={() => {}} />);

//     fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
//     fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });
//     fireEvent.click(screen.getByText(/login/i));

//     await waitFor(() => expect(screen.getByText(/invalid username or password/i)).toBeInTheDocument());
//   });
});
