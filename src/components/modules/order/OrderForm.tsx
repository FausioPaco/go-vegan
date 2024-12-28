import { useCallback, useState } from 'react';
import { Stepper } from '@/components/ui/stepper';
import OrderAccountStep from './OrderAccountStep';
import OrderDetailsStep from './OrderDetailsStep';
import OrderChoicesStep from './OrderChoicesStep';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import OrderReviewStep from './OrderReviewStep';

const options = [
  { stepNumber: 1, description: 'Account' },
  { stepNumber: 2, description: 'Order' },
  { stepNumber: 3, description: 'Food choices' },
  { stepNumber: 4, description: 'Review' },
  { stepNumber: 5, description: 'Payment' },
];

const OrderForm = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [currentStep, setCurrentStep] = useState(isAuthenticated ? 2 : 1);
  const [stepsTaken, setStepsTaken] = useState<number[]>(
    isAuthenticated ? [1] : [],
  );

  const handleStepChange = useCallback((stepNumber: number) => {
    setCurrentStep(stepNumber);
    setStepsTaken((prevStepsTaken) => {
      if (stepNumber > 1) return [...prevStepsTaken, stepNumber - 1];
      return [];
    });
  }, []);

  const handlePreviousStepChange = useCallback((stepNumber: number) => {
    setCurrentStep((prevStep) => prevStep - 1);
    setStepsTaken((prevStepsTaken) => [
      ...prevStepsTaken.filter((f) => f !== stepNumber - 1),
    ]);
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
        <OrderAccountStep onFinish={() => handleStepChange(2)} />
      )}

      {currentStep === 2 && (
        <OrderDetailsStep onFinish={() => handleStepChange(3)} />
      )}

      {currentStep === 3 && (
        <OrderChoicesStep
          onFinish={() => handleStepChange(4)}
          onPrevious={() => handlePreviousStepChange(2)}
        />
      )}

      {currentStep === 4 && (
        <OrderReviewStep
          onFinish={() => handleStepChange(5)}
          onPrevious={() => handlePreviousStepChange(4)}
        />
      )}
    </div>
  );
};

export default OrderForm;
