import cn from '@/utils/cn';
import { useStepperContext } from './StepperContext';

type IStepperItemProps = {
  stepNumber: number;
  stepDescription: string;
};

const StepperItem = ({ stepNumber, stepDescription }: IStepperItemProps) => {
  const { activeOption, setActiveOption } = useStepperContext();

  return (
    <div
      className="z-30 text-center"
      onClick={() => setActiveOption(stepNumber)}
    >
      <button
        className="text-medium size-[40px] rounded-full border-none bg-grey-25 text-grey-500 aria-expanded:bg-primary-600 aria-expanded:text-white"
        type="button"
        aria-expanded={activeOption === stepNumber}
      >
        {stepNumber}
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
