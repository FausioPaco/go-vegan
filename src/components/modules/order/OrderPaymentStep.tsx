import { motion } from 'motion/react';
import OrderSummary from './OrderSummary';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Option } from '@/types/Select';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const currentYear = new Date().getFullYear();

const YEARS: Option[] = Array.from(
  { length: 10 },
  (_, i) =>
    ({
      label: currentYear + i,
      value: currentYear + i,
    }) as Option,
);

const MONTHS: Option[] = Array.from(
  { length: 12 },
  (_, i) =>
    ({
      label: String(i + 1).padStart(2, '0'),
      value: String(i + 1).padStart(2, '0'),
    }) as Option,
);

type OrderPaymentProps = {
  onFinish: () => void;
  onPrevious: () => void;
};

type OrderPaymentInput = {
  cardName: string;
  cardNumber: string;
  cvv: number;
  year: number;
  month: number;
};

const OrderPaymentStep = ({ onFinish, onPrevious }: OrderPaymentProps) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderPaymentInput>();

  const onSubmit: SubmitHandler<OrderPaymentInput> = (
    data: OrderPaymentInput,
  ) => {
    setIsSubmiting(true);

    console.log(data);

    setTimeout(() => {
      setIsSubmiting(false);
      onFinish();
    }, 200);
  };

  return (
    <motion.section
      className="my-8 flex w-full flex-col items-center justify-center gap-y-2 px-3 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
      }}
    >
      <div className="mb-4 flex w-full flex-col items-center gap-y-2 text-center">
        <h3 className="text-3xl font-bold text-grey-600 md:text-4xl">
          One more step
        </h3>
        <p className="text-lg text-grey-500">
          We need your information about the payment
        </p>
      </div>

      <div className="flex w-full flex-col items-start space-y-8 md:max-w-[95%] md:flex-row md:justify-center md:space-x-16 md:space-y-0">
        <form
          className="mt-2 w-full md:max-w-[40%]"
          aria-busy={isSubmiting}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Card name:"
            type="text"
            {...register('cardName', {
              required: 'The name on the card is required',
            })}
            placeholder="Name on the card"
            error={errors.cardName?.message}
          />

          <Input
            label="Card number:"
            type="text"
            {...register('cardNumber', {
              required: 'The name on the card is required',
              maxLength: {
                value: 19,
                message:
                  'The card number must be a maximum of 19 characters long.',
              },
              pattern: {
                value: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
                message:
                  'Must be a valid card number. Please include space between the numbers.',
              },
            })}
            className="text-base"
            placeholder="1234 5678 9012 3456"
            error={errors.cardNumber?.message}
          />

          <div className="flex w-full gap-x-2">
            <div className="w-full md:w-1/3">
              <Input
                label="CVV:"
                type="text"
                {...register('cvv', {
                  required: 'Your CVV is required',
                  pattern: {
                    value: /^\d{3}$/,
                    message: 'Must be a valid CVV',
                  },
                })}
                placeholder="123"
                error={errors.cvv?.message}
              />
            </div>

            <div className="w-full md:w-1/3">
              <Select
                label="Month:"
                options={MONTHS}
                {...register('month', {
                  required: 'The month is required',
                })}
                error={errors.month?.message}
                aria-readonly={isSubmiting}
              />
            </div>

            <div className="w-full md:w-1/3">
              <Select
                label="Year:"
                options={YEARS}
                {...register('year', {
                  required: 'The year is required',
                })}
                error={errors.year?.message}
                aria-readonly={isSubmiting}
              />
            </div>
          </div>
          <div className="mt-5 flex space-x-2">
            <Button
              size="md"
              variant="secondary"
              type="button"
              onClick={onPrevious}
              icon="arrow-left"
            >
              Previous
            </Button>

            <Button onClick={handleSubmit(onSubmit)} size="md" type="submit">
              Submit Order
            </Button>
          </div>
        </form>
        <OrderSummary />
      </div>
    </motion.section>
  );
};

export default OrderPaymentStep;
