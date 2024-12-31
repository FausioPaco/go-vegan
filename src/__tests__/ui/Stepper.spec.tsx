import { Stepper, StepperItem } from '@/components/ui/stepper';
import { StepperContext } from '@/components/ui/stepper/StepperContext';
// import { StepperContext } from '@/components/ui/stepper/StepperContext';
import { StepperOption } from '@/types/Stepper';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const stepperOptions = [
  { stepNumber: 1, description: 'Step 1' },
  { stepNumber: 2, description: 'Step 2' },
  { stepNumber: 3, description: 'Step 3' },
] as StepperOption[];

const handleStepChange = vi.fn();

describe('Stepper Component', () => {
  it('should render with all steps', () => {
    const { getByText, getByRole } = render(
      <Stepper
        value={1}
        max={3}
        options={stepperOptions}
        activeOption={1}
        stepsTaken={[1]}
        onChangeOption={handleStepChange}
      />,
    );

    stepperOptions.forEach((option) => {
      expect(getByText(option.description)).toBeInTheDocument();
    });

    expect(getByRole('progressbar')).toHaveAttribute('value', '1');
  });

  it('applies correct styles for active and completed steps (steps taken)', () => {
    const { getByTestId } = render(
      <Stepper
        value={3}
        max={3}
        options={stepperOptions}
        activeOption={2}
        stepsTaken={[1]}
        onChangeOption={handleStepChange}
      />,
    );

    expect(getByTestId('step-1-button')).toHaveClass(
      'bg-primary-600 text-white',
    );
    expect(getByTestId('step-2-button')).toHaveClass(
      'aria-expanded:bg-primary-600 aria-expanded:text-white',
    );
  });
});

describe('StepperItem Component', () => {
  const mockContext = {
    activeOption: 2,
    stepsTaken: [],
    setActiveOption: vi.fn(),
  };

  it('renders StepperItem correctly', () => {
    const { getByText } = render(
      <StepperContext.Provider value={mockContext}>
        <StepperItem stepNumber={1} stepDescription="Step 1" />
      </StepperContext.Provider>,
    );

    expect(getByText('Step 1')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });

  it('triggers context update on click', () => {
    const { getByTestId } = render(
      <StepperContext.Provider value={mockContext}>
        <StepperItem stepNumber={2} stepDescription="Step 2" enableSkip />
      </StepperContext.Provider>,
    );

    const stepButton = getByTestId('step-2-button');
    fireEvent.click(stepButton);

    expect(mockContext.setActiveOption).toHaveBeenCalledWith(2);
  });
});
