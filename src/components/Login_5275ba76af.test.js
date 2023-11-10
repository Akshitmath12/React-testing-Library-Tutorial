// Test generated by RoostGPT for test React_Test using AI Type Open AI and AI Model gpt-4

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  let component;
  const emailInput = 'formBasicEmail';
  const passwordInput = 'formBasicPassword';
  const submitButton = 'submit';
  const resetButton = 'reset';
  
  beforeEach(() => {
    component = render(<Login />);
  });

  test('renders email input', () => {
    expect(component.getByLabelText('Email')).toBeInTheDocument();
  });

  test('renders password input', () => {
    expect(component.getByLabelText('Password')).toBeInTheDocument();
  });

  test('renders submit button', () => {
    expect(component.getByTestId(submitButton)).toBeInTheDocument();
  });

  test('renders reset button', () => {
    expect(component.getByTestId(resetButton)).toBeInTheDocument();
  });

  test('valid email and password, submit form', () => {
    fireEvent.change(component.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(component.getByLabelText('Password'), { target: { value: 'password' } });
    fireEvent.click(component.getByTestId(submitButton));
    expect(component.getByTestId('user')).toBeInTheDocument();
  });

  test('invalid email, submit form', () => {
    fireEvent.change(component.getByLabelText('Email'), { target: { value: 'invalid_email' } });
    fireEvent.click(component.getByTestId(submitButton));
    expect(component.getByTestId('error')).toBeInTheDocument();
  });

  test('reset form', () => {
    fireEvent.change(component.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(component.getByLabelText('Password'), { target: { value: 'password' } });
    fireEvent.click(component.getByTestId(resetButton));
    expect(component.getByLabelText('Email').value).toBe('');
    expect(component.getByLabelText('Password').value).toBe('');
  });
});
