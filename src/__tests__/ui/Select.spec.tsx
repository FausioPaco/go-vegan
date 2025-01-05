import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '@/components/ui/select';
import { Option } from '@/types/Select';
import { describe } from 'node:test';
import { expect, it, vi } from 'vitest';

describe('Select Component', () => {
  const options: Option[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  it('should render correctly with label and options', () => {
    const selectLabel = 'Select an option';

    const { getByLabelText, getByText } = render(
      <Select label={selectLabel} options={options} />,
    );

    expect(getByLabelText(selectLabel)).toBeInTheDocument();

    options.forEach((option) => {
      expect(getByText(option.label)).toBeInTheDocument();
    });
  });

  it('displays error message when error prop is passed', () => {
    const errorMessage = 'this field is required';

    const { getByText, getByTestId } = render(
      <Select
        label="Select an option"
        options={options}
        error={errorMessage}
      />,
    );

    expect(getByText(errorMessage)).toBeInTheDocument();
    expect(getByTestId('select')).toHaveClass('border-danger-600');
  });

  it('displays text tip when textTip prop is passed', () => {
    const textTipMessage = 'This is a text tip example for select';

    render(
      <Select
        label="Select an option"
        options={options}
        textTip={textTipMessage}
      />,
    );

    expect(screen.getByText(textTipMessage)).toBeInTheDocument();
  });

  it('handles value change correctly', () => {
    const handleChange = vi.fn();
    const { getByTestId } = render(
      <Select
        label="Select an option"
        options={options}
        onChange={handleChange}
      />,
    );

    const selectElement = getByTestId('select') as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: '2' } });

    expect(handleChange).toHaveBeenCalled();

    expect(selectElement.value).toBe('2');
  });

  it('applies custom className prop', () => {
    const customClass = 'custom-class';

    const { getByTestId } = render(
      <Select
        label="Select an option"
        options={options}
        className={customClass}
      />,
    );

    expect(getByTestId('select')).toHaveClass(customClass);
  });
});
