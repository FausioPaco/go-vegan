import { useCallback, useState } from 'react';
import { Stepper } from '@/components/ui/stepper';
import { RangeBar } from '@/components/ui/rangebar';
import { AppDatePicker as DatePicker } from '@/components/ui/datepicker';

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
  const [numberOfPeople, setNumberOfPeople] = useState(10);
  const [orderDate, setOrderDate] = useState<Date | null>(new Date());

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(parseInt(e.target.value));
  };

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

      <div className="flex w-full justify-center">
        <div className="mt-2 flex w-full flex-col items-center justify-center px-4 lg:max-w-[30%]">
          <RangeBar
            label="Number of people:"
            value={numberOfPeople}
            onChange={handleRangeChange}
          />

          <DatePicker
            value={orderDate}
            onChange={(date) => setOrderDate(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
