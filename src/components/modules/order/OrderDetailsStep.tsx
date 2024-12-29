import { Input } from '@/components/ui/input';
import { RangeBar } from '@/components/ui/rangebar';
import { motion } from 'motion/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AppDatePicker as DatePicker } from '@/components/ui/datepicker';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { useDispatch, useSelector } from 'react-redux';
import { setDetails } from '@/store/reducers/cartReducer';
import { RootState } from '@/store';

type IDetailsForm = {
  onFinish: () => void;
};

type OrderDetailsInput = {
  location: string;
  date: Date | null;
  time: Date | null;
  numberOfPeople: number;
};

const OrderDetailsStep = ({ onFinish }: IDetailsForm) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { details } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OrderDetailsInput>();

  const onSubmit: SubmitHandler<OrderDetailsInput> = (
    data: OrderDetailsInput,
  ) => {
    setIsSubmiting(true);

    const today = new Date().toISOString();

    dispatch(
      setDetails({
        location: data.location,
        date: data.date ? data.date.toISOString() : today,
        time: data.time ? data.time.toISOString() : today,
        numberOfPeople: data.numberOfPeople,
      }),
    );

    setTimeout(() => {
      setIsSubmiting(false);
      onFinish();
    }, 200);
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
        <div className="my-8 flex w-full flex-col items-center gap-y-2 text-center">
          <h3 className="text-3xl font-bold text-grey-600 md:text-4xl">
            About your Order
          </h3>
          <p className="text-lg text-grey-500">
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
              value: details.location,
            })}
            placeholder="Where do we send your order?"
            error={errors.location?.message}
            textTip="We deliver exclusively to the City of Maputo, Mozambique"
          />

          <DatePicker
            label="Date:"
            placeholder="Select the date of the order"
            value={watch('date') || new Date(details.date)}
            {...register('date', {
              required: 'The date of the order is required',
              valueAsDate: true,
              value: new Date(details.date),
            })}
            onChange={(date) => setValue('date', date)}
            error={errors.date?.message}
          />

          <DatePicker
            label="Time:"
            placeholder="Select the time of the order"
            value={watch('time') || new Date(details.time)}
            {...register('time', {
              required: 'The time of the order is required',
              valueAsDate: true,
              value: new Date(details.time),
            })}
            onChange={(time) => setValue('time', time)}
            error={errors.time?.message}
            timeOnly
          />

          <RangeBar
            label="Number of People"
            value={watch('numberOfPeople') || details.numberOfPeople}
            {...register('numberOfPeople', {
              required: 'The number of people is required',
              valueAsNumber: true,
              value: details.numberOfPeople,
            })}
            onChange={(event) =>
              setValue('numberOfPeople', parseInt(event?.target.value))
            }
            error={errors.numberOfPeople?.message}
          />

          <div className="mt-5 flex space-x-2">
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
