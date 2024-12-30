import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '@/components/ui/input';

describe('Input Component', () => {
  it('should render correctly with label', () => {
    const labelName = 'Name';

    const { getByLabelText } = render(<Input label={labelName} />);

    expect(getByLabelText(labelName)).toBeInTheDocument();
  });

  it('should display error message when error prop is passed', () => {
    const errorMessage = 'This field is required';

    const { getByText, getByTestId } = render(
      <Input label="Name" error={errorMessage} />,
    );

    expect(getByText(errorMessage)).toBeInTheDocument();
    expect(getByTestId('input')).toHaveClass('border-danger-600');
  });

  it('displays text tip when textTip prop is passed', () => {
    const textTipMessage = 'This is a text tip example';

    render(<Input label="Email" textTip={textTipMessage} />);

    expect(screen.getByText(textTipMessage)).toBeInTheDocument();
  });

  it('handles input value changes', () => {
    const inputValue = 'John Doe';

    const { getByTestId } = render(<Input label="Name" />);

    const inputElement = getByTestId('input') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(inputElement.value).toBe(inputValue);
  });

  it('should apply a custom className prop', () => {
    const customClass = 'custom-class';

    render(<Input label="Name" className={customClass} />);

    expect(screen.getByTestId('input')).toHaveClass(customClass);
  });
});
