import { useStepperContext } from './StepperContext';
import cn from '@/utils/cn';
import { Icon } from '../icon';
import { useCallback } from 'react';

type IStepperItemProps = {
  stepNumber: number;
  stepDescription: string;
  enableSkip?: boolean;
};

const StepperItem = ({
  stepNumber,
  stepDescription,
  enableSkip = false,
}: IStepperItemProps) => {
  const { activeOption, setActiveOption, stepsTaken } = useStepperContext();

  const handleSetActiveOption = useCallback(
    (stepNumber: number) => {
      if (enableSkip) setActiveOption(stepNumber);
    },
    [enableSkip, setActiveOption],
  );

  return (
    <div
      className="z-30 flex flex-col items-center text-center"
      onClick={() => handleSetActiveOption(stepNumber)}
    >
      <button
        data-testid={`step-${stepNumber}-button`}
        className={cn(
          'text-medium flex size-[40px] items-center justify-center rounded-full border-none bg-grey-25 text-center text-grey-500 aria-expanded:bg-primary-600 aria-expanded:text-white',
          stepsTaken.includes(stepNumber) && 'bg-primary-600 text-white',
        )}
        type="button"
        aria-expanded={activeOption === stepNumber}
        onClick={() => handleSetActiveOption(stepNumber)}
      >
        {stepsTaken.includes(stepNumber) ? (
          <Icon
            name="checkmark"
            width={24}
            height={24}
            className="fill-white"
          />
        ) : (
          stepNumber
        )}
      </button>
      <p
        className={cn(
          'mt-2 text-sm text-grey-600',
          activeOption === stepNumber && 'text-primary-600',
        )}
      >
        {stepDescription}
      </p>
    </div>
  );
};

export default StepperItem;
