// Test generated by RoostGPT for test React_Test using AI Type Open AI and AI Model gpt-4

import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  afterEach(cleanup);

  test('renders Login form', () => {
    const { getByLabelText, getByTestId } = render(<Login />);
    expect(getByTestId('submit')).toHaveTextContent('Submit');
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  test('shows error message for invalid email', () => {
    const { getByLabelText, getByTestId } = render(<Login />);
    fireEvent.change(getByLabelText('Email'), { target: { value: 'invalidemail' } });
    fireEvent.click(getByTestId('submit'));
    expect(getByTestId('error')).toHaveTextContent('Email is not valid');
  });

  test('shows success message for valid email', () => {
    const { getByLabelText, getByTestId } = render(<Login />);
    fireEvent.change(getByLabelText('Email'), { target: { value: 'validemail@example.com' } });
    fireEvent.click(getByTestId('submit'));
    expect(getByTestId('user')).toHaveTextContent('validemail@example.com');
  });

  test('resets form on reset button click', () => {
    const { getByLabelText, getByTestId } = render(<Login />);
    fireEvent.change(getByLabelText('Email'), { target: { value: 'validemail@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password' } });
    fireEvent.click(getByTestId('reset'));
    expect(getByLabelText('Email')).toHaveValue('');
    expect(getByLabelText('Password')).toHaveValue('');
  });
});
