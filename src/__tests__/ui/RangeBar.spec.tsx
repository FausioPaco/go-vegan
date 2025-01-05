import { render, fireEvent } from '@testing-library/react';
import { RangeBar } from '@/components/ui/rangebar';
import { describe, expect, it, vi } from 'vitest';
import { useState } from 'react';

const MockRange = () => {
  const [value, setValue] = useState(10);
  return (
    <RangeBar
      label="Select range"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
};

describe('Range Bar Component', () => {
  const handleChange = vi.fn();

  it('renders with label and default value', () => {
    const rangeBarLabel = 'Select range';

    const { getByLabelText, getByTestId } = render(
      <RangeBar label={rangeBarLabel} onChange={handleChange} />,
    );

    expect(getByLabelText(rangeBarLabel)).toBeInTheDocument();
    expect(getByTestId('range')).toHaveValue('10');
  });

  it('displays the correct value on hover', () => {
    const { getByTestId } = render(
      <RangeBar label="Select range" value={10} onChange={handleChange} />,
    );

    const rangeSlider = getByTestId('range');

    const tooltip = getByTestId('range-hovered');
    expect(tooltip).toHaveClass('opacity-0');

    fireEvent.mouseEnter(rangeSlider);
    expect(tooltip).toHaveClass('opacity-100');
  });

  it('displays error message when error prop is passed', () => {
    const errorMessage = 'This field is required';

    const { getByText } = render(
      <RangeBar
        label="Select range"
        value={10}
        error={errorMessage}
        onChange={handleChange}
      />,
    );

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('should handle value change correctly', () => {
    const { getByTestId } = render(<MockRange />);

    const rangeSlider = getByTestId('range') as HTMLInputElement;

    fireEvent.change(rangeSlider, { target: { value: 15 } });

    expect(rangeSlider).toHaveValue('15');
  });

  it('applies custom className prop', () => {
    const customClass = 'custom-class';

    const { getByTestId } = render(
      <RangeBar
        label="Select range"
        className={customClass}
        onChange={handleChange}
      />,
    );

    expect(getByTestId('range')).toHaveClass(customClass);
  });

  it('calculates the correct range percentage based on value', () => {
    const rangeValue = 5;
    const rangePercentage = (rangeValue * 100) / 20;

    const { getByText, getByTestId } = render(
      <RangeBar
        label="Select range"
        value={rangeValue}
        onChange={handleChange}
      />,
    );

    const slider = getByTestId('range');
    const tooltip = getByText(rangeValue);

    const expectedStyle = `linear-gradient(to right, #4caf50 ${rangePercentage - 2}%, rgb(75 178 72 / 0.2) ${rangePercentage - 2}%)`;

    expect(slider).toHaveStyle({ background: expectedStyle });

    expect(tooltip).toBeInTheDocument();
  });
});
