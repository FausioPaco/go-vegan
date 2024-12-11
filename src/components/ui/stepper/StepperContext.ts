import { createContext, useContext } from 'react';

export type StepperContextType = {
  activeOption: number;
  setActiveOption: (stepNumber: number) => void;
};

export const StepperContext = createContext<StepperContextType>(
  {} as StepperContextType,
);

export const useStepperContext = () => {
  const ctx = useContext(StepperContext);

  if (!ctx) throw new Error('useStepperContext  must be wrapped by <Stepper>');

  return ctx;
};
