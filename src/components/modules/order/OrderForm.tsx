import { useCallback, useState } from 'react';
import { Stepper } from '@/components/ui/stepper';
import OrderAccountStep from './OrderAccountStep';

const options = [
  { stepNumber: 1, description: 'Account' },
  { stepNumber: 2, description: 'Order' },
  { stepNumber: 3, description: 'Food choices' },
  { stepNumber: 4, description: 'Review' },
  { stepNumber: 5, description: 'Payment' },
];

const OrderForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepsTaken, setStepsTaken] = useState<number[]>([]);

  const handleStepChange = useCallback((stepNumber: number) => {
    setCurrentStep(stepNumber);
    setStepsTaken((prevStepsTaken) => {
      if (stepNumber >= 1) return [...prevStepsTaken, stepNumber - 1];

      return [1];
    });
  }, []);

  return (
    <div className="my-8">
      <Stepper
        value={(currentStep / options.length) * 100}
        max={100}
        options={options}
        activeOption={currentStep}
        stepsTaken={stepsTaken}
        onChangeOption={handleStepChange}
      />

      {currentStep === 1 && (
        <OrderAccountStep onFinish={() => setCurrentStep(2)} />
      )}
    </div>
  );
};

export default OrderForm;
