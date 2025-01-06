import { configureStore } from '@reduxjs/toolkit';
import { describe, expect, it, vi } from 'vitest';
import userReducer from '@store/reducers/userReducer';
import { Provider } from 'react-redux';
import { Login } from '@/components/modules/auth';
import { act, fireEvent, render, screen } from '@testing-library/react';

describe('Login Component', () => {
  const mockOnFinish = vi.fn();
  const mockOnSignUp = vi.fn();

  const setup = () => {
    const store = configureStore({
      reducer: {
        user: userReducer,
      },
    });

    return render(
      <Provider store={store}>
        <Login onFinish={mockOnFinish} onSignUp={mockOnSignUp} />
      </Provider>,
    );
  };

  it('should render the form fields and buttons', () => {
    setup();

    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByText(/Next step/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
  });

  it('should show validation errors for required fields', async () => {
    setup();

    const nextStepButton = screen.getAllByTestId('button')[0];

    await act(async () => {
      fireEvent.click(nextStepButton);
    });

    expect(screen.getByText(/Your email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Your password is required/i)).toBeInTheDocument();
  });

  it('should show validation errors for invalid email', async () => {
    setup();

    const nextStepButton = screen.getAllByTestId('button')[0];

    await act(async () => {
      fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
        target: { value: 'invalid-email' },
      });

      fireEvent.input(screen.getByPlaceholderText('Enter your password'), {
        target: { value: 'password123' },
      });

      fireEvent.submit(nextStepButton);
    });

    expect(
      await screen.getByText(/Must be a valid email/i),
    ).toBeInTheDocument();
  });

  it('should dispatch login action and call `onFinish` on successful submission', async () => {
    setup();

    const nextStepButton = screen.getAllByTestId('button')[0];

    await act(async () => {
      fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
        target: { value: 'test@example.com' },
      });

      fireEvent.input(screen.getByPlaceholderText('Enter your password'), {
        target: { value: 'password123' },
      });

      fireEvent.submit(nextStepButton);
    });

    expect(mockOnFinish).toHaveBeenCalled();
  });
});
