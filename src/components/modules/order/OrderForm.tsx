import { Stepper } from '@/components/ui/stepper';
import { useCallback, useState } from 'react';

const options = [
  { stepNumber: 1, description: 'Account' },
  { stepNumber: 2, description: 'Order' },
  { stepNumber: 3, description: 'Food choices' },
  { stepNumber: 4, description: 'Review' },
  { stepNumber: 5, description: 'Payment' },
];

const OrderForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = useCallback((stepNumber: number) => {
    setCurrentStep(stepNumber);
  }, []);

  return (
    <div className="my-8">
      <Stepper
        value={(currentStep / options.length) * 100}
        max={100}
        options={options}
        activeOption={currentStep}
        onChangeOption={handleStepChange}
      />
    </div>
  );
};

export default OrderForm;
