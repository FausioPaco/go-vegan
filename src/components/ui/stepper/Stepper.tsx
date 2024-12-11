import { useId } from 'react';
import StepperItem from './StepperItem';
import { StepperContext } from './StepperContext';

type StepperOption = {
  stepNumber: number;
  description: string;
};

type IStepperProps = {
  value: number;
  max: number;
  options: StepperOption[];
  activeOption: number;
  stepsTaken: number[];
  onChangeOption: (stepNumber: number) => void;
};

const Stepper = ({
  value,
  max,
  options,
  activeOption,
  stepsTaken,
  onChangeOption,
}: IStepperProps) => {
  const stepperId = useId();

  return (
    <StepperContext.Provider
      value={{ activeOption, setActiveOption: onChangeOption, stepsTaken }}
    >
      <div className="flex items-center justify-center">
        <div className="relative mb-4 flex items-center justify-between md:space-x-32">
          <progress
            className="absolute top-[30%] z-10 mb-7 ml-[15%] block h-1 w-[80%] appearance-none overflow-hidden rounded-lg bg-grey-100 [&::-moz-progress-bar]:bg-primary-600 [&::-ms-fill]:bg-primary-600 [&::-webkit-progress-bar]:bg-grey-100 [&::-webkit-progress-value]:bg-primary-600"
            id={stepperId}
            value={value}
            max={max}
          ></progress>
          {options.map((option) => (
            <StepperItem
              key={option.stepNumber}
              stepNumber={option.stepNumber}
              stepDescription={option.description}
            />
          ))}
        </div>
      </div>
    </StepperContext.Provider>
  );
};

export default Stepper;
