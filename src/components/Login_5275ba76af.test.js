// Test generated by RoostGPT for test React_Test using AI Type Open AI and AI Model gpt-4

import { render, fireEvent, cleanup } from '@testing-library/react';
import Login from './Login';

afterEach(cleanup);

describe('Login Component', () => {
  test('Email field should update on change', () => {
    const { getByPlaceholderText } = render(<Login />);
    const emailField = getByPlaceholderText('Enter email');
    fireEvent.change(emailField, { target: { value: 'test@gmail.com' } });
    expect(emailField.value).toBe('test@gmail.com');
  });

  test('Password field should update on change', () => {
    const { getByPlaceholderText } = render(<Login />);
    const passwordField = getByPlaceholderText('Password');
    fireEvent.change(passwordField, { target: { value: 'password' } });
    expect(passwordField.value).toBe('password');
  });

  test('Error message should be displayed for invalid email', () => {
    const { getByText, getByTestId } = render(<Login />);
    const submitButton = getByTestId('submit');
    fireEvent.click(submitButton);
    expect(getByText('Email is not valid')).toBeInTheDocument();
  });

  test('Reset button should clear the fields', () => {
    const { getByPlaceholderText, getByTestId } = render(<Login />);
    const emailField = getByPlaceholderText('Enter email');
    const passwordField = getByPlaceholderText('Password');
    const resetButton = getByTestId('reset');
    fireEvent.change(emailField, { target: { value: 'test@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });
    fireEvent.click(resetButton);
    expect(emailField.value).toBe('');
    expect(passwordField.value).toBe('');
  });
});