import { describe, expect, it, vi } from 'vitest';
import { ContactForm } from '@/components/modules/contact';
import { act, fireEvent, render } from '@testing-library/react';
import { ContactInput } from '@/types/Contact';

describe('Contact Form', () => {
  it('should render the form fields correctly', () => {
    const { getByLabelText, getByText } = render(
      <ContactForm onFinish={vi.fn()} />,
    );

    expect(getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(getByLabelText(/Subject:/i)).toBeInTheDocument();
    expect(getByLabelText(/Message:/i)).toBeInTheDocument();
    expect(getByText(/Send message/i)).toBeInTheDocument();
  });

  it('should show error messages if required fields are empty', async () => {
    const handleSubmit = vi.fn();
    const { getByTestId } = render(<ContactForm onFinish={handleSubmit} />);

    const submitButton = getByTestId('button');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(handleSubmit).not.toBeCalled();
  });

  it('should validate correct email', async () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <ContactForm onFinish={vi.fn()} />,
    );

    await act(async () => {
      fireEvent.input(getByPlaceholderText('Enter your email'), {
        target: { value: 'invalid-email' },
      });

      fireEvent.click(getByTestId('button'));
    });

    expect(await getByText(/Must be a valid email/i)).toBeInTheDocument();
  });
});

it('should call `onFinish` after successful submission', async () => {
  const onFinish = vi.fn();

  const input: ContactInput = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    subject: 'Menu',
    message: 'This is a test message.',
  };

  const { getByRole } = render(<ContactForm onFinish={onFinish} />);

  await act(async () => {
    fireEvent.input(getByRole('textbox', { name: /name/i }), {
      target: { value: input.name },
    });

    fireEvent.input(getByRole('textbox', { name: /email/i }), {
      target: { value: input.email },
    });

    fireEvent.change(getByRole('combobox', { name: /subject/i }), {
      target: { value: input.subject },
    });

    fireEvent.input(getByRole('textbox', { name: /message/i }), {
      target: { value: input.message },
    });

    fireEvent.submit(getByRole('button'));
  });

  expect(onFinish).toBeCalled();
});
