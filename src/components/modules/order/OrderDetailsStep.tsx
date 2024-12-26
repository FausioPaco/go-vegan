import { Input } from '@/components/ui/input';
import { RangeBar } from '@/components/ui/rangebar';
import { motion } from 'motion/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AppDatePicker as DatePicker } from '@/components/ui/datepicker';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { OrderDetails } from '@/types/Order';
import { useDispatch } from 'react-redux';
import { setDetails } from '@/store/reducers/cartReducer';

type IDetailsForm = {
  onFinish: () => void;
  onPrevious: () => void;
};

const OrderDetailsStep = ({ onFinish, onPrevious }: IDetailsForm) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OrderDetails>();

  const onSubmit: SubmitHandler<OrderDetails> = (data: OrderDetails) => {
    setIsSubmiting(true);
    dispatch(setDetails(data));

    setTimeout(() => {
      onFinish();
    }, 1000);
  };

  return (
    <motion.section
      className="my-4 flex w-full flex-col items-center justify-center px-4"
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
      <div className="w-full md:max-w-[40%]">
        <div className="my-2 flex w-full flex-col items-center gap-y-2 text-center">
          <h3 className="texl-xl font-bold text-grey-600 md:text-3xl">
            About your Order
          </h3>
          <p className="text-grey-500">
            Provide us information about your order
          </p>
        </div>

        <form
          className="mt-2"
          aria-busy={isSubmiting}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Location:"
            type="text"
            {...register('location', {
              required: 'The location of the order is required',
            })}
            placeholder="Where do we send your order?"
            error={errors.location?.message}
            textTip="We deliver exclusively to the City of Maputo, Mozambique"
          />

          <DatePicker
            label="Date:"
            placeholder="Select the date of the order"
            value={watch('date') || new Date()}
            {...register('date', {
              required: 'The date of the order is required',
              valueAsDate: true,
            })}
            onChange={(date) => setValue('date', date)}
            error={errors.date?.message}
          />

          <DatePicker
            label="Time:"
            placeholder="Select the time of the order"
            value={watch('time') || new Date()}
            {...register('time', {
              required: 'The time of the order is required',
              valueAsDate: true,
            })}
            onChange={(time) => setValue('time', time)}
            error={errors.time?.message}
            timeOnly
          />

          <RangeBar
            label="Number of People"
            value={watch('numberOfPeople')}
            {...register('numberOfPeople', {
              required: 'The number of people is required',
              valueAsNumber: true,
              value: 10,
            })}
            onChange={(event) =>
              setValue('numberOfPeople', parseInt(event?.target.value))
            }
            error={errors.numberOfPeople?.message}
          />

          <div className="mt-5 flex space-x-2">
            <Button
              size="md"
              variant="secondary"
              type="button"
              onClick={onPrevious}
              aria-readonly={isSubmiting}
              disabled={isSubmiting}
              icon="arrow-left"
            >
              Previous
            </Button>

            <Button
              size="md"
              type="submit"
              onClick={() => onSubmit}
              aria-readonly={isSubmiting}
              icon="arrow-right"
              iconPosition="right"
            >
              {isSubmiting ? <Loading size="sm" /> : 'Next step'}
            </Button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default OrderDetailsStep;
