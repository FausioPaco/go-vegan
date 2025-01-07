import { configureStore } from '@reduxjs/toolkit';
import { describe, expect, it, vi, afterEach, beforeEach } from 'vitest';
import userReducer from '@store/reducers/userReducer';
import { Provider } from 'react-redux';
import { SignUp } from '@/components/modules/auth';
import { act, fireEvent, render } from '@testing-library/react';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('SignUp Component', () => {
  const mockOnFinish = vi.fn();
  const mockOnSignIn = vi.fn();

  const setup = () => {
    const store = configureStore({
      reducer: {
        user: userReducer,
      },
    });

    return render(
      <Provider store={store}>
        <SignUp onFinish={mockOnFinish} onSignIn={mockOnSignIn} />
      </Provider>,
    );
  };

  it('should render all form fields and the button', () => {
    const { getByLabelText, getByText } = setup();

    expect(getByLabelText('Name:')).toBeInTheDocument();
    expect(getByLabelText('Email:')).toBeInTheDocument();
    expect(getByLabelText('Password:')).toBeInTheDocument();
    expect(getByLabelText('Confirm password:')).toBeInTheDocument();
    expect(getByText('Next step')).toBeInTheDocument();
  });

  it('should show validation errors for required fields', async () => {
    const { getByTestId, getByText } = setup();

    const nextStepButton = getByTestId('button');

    await act(async () => {
      fireEvent.click(nextStepButton);
    });

    expect(getByText(/Your name is required/i)).toBeInTheDocument();
    expect(getByText(/Your email is required/i)).toBeInTheDocument();
    expect(getByText(/Your password is required/i)).toBeInTheDocument();
    expect(getByText(/You must confirm your password/i)).toBeInTheDocument();
  });

  it('should show validation errors for invalid inputs', async () => {
    const { getByRole, getByText, getByPlaceholderText, getByTestId } = setup();

    const nextStepButton = getByTestId('button');

    await act(async () => {
      fireEvent.input(getByRole('textbox', { name: 'Name:' }), {
        target: { value: 'InvalidName123' },
      });

      fireEvent.input(getByRole('textbox', { name: 'Email:' }), {
        target: { value: 'invalid-email' },
      });

      fireEvent.input(getByPlaceholderText('Enter your password'), {
        target: { value: 'short' },
      });

      fireEvent.input(getByPlaceholderText('Re-enter your password'), {
        target: { value: 'mismatch' },
      });

      fireEvent.submit(nextStepButton);
    });

    expect(getByText(/Must be a valid name/i)).toBeInTheDocument();
    expect(getByText(/Must be a valid email/i)).toBeInTheDocument();
    expect(
      getByText(/Password must be at least 8 characters long/i),
    ).toBeInTheDocument();
    expect(getByText(/Passwords do not match/i)).toBeInTheDocument();
  });

  it('should call `onFinish` after successful submission', async () => {
    const { getByTestId, getByRole, getByPlaceholderText } = setup();

    const nextStepButton = getByTestId('button');

    await act(async () => {
      fireEvent.input(getByRole('textbox', { name: 'Name:' }), {
        target: { value: 'John Doe' },
      });

      fireEvent.input(getByRole('textbox', { name: 'Email:' }), {
        target: { value: 'john.doe@example.com' },
      });

      fireEvent.input(getByPlaceholderText('Enter your password'), {
        target: { value: 'password123' },
      });

      fireEvent.input(getByPlaceholderText('Re-enter your password'), {
        target: { value: 'password123' },
      });

      fireEvent.submit(nextStepButton);
    });

    vi.advanceTimersByTime(1000);
    expect(mockOnFinish).toHaveBeenCalled();
  });
});
