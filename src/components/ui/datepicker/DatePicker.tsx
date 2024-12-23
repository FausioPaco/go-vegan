import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import { forwardRef, useId } from 'react';
import { InputError } from '../input-error';
import { Icon } from '../icon';

type IDatepickerProps = {
  value: Date | null;
  onChange: (date: Date | null) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  timeOnly?: boolean;
};

const AppDatePicker = forwardRef<DatePicker, IDatepickerProps>(
  (
    {
      value,
      onChange,
      label = 'Date:',
      placeholder = 'Select the date of the order',
      error,
      timeOnly = false,
    }: IDatepickerProps,
    ref,
  ) => {
    const datePickerId = useId();

    return (
      <div className="z-50 my-2 flex w-full flex-col space-y-1">
        <label
          htmlFor={datePickerId}
          className="mb-1 block text-sm font-medium text-grey-800"
        >
          {label}
        </label>
        <DatePicker
          id={datePickerId}
          ref={ref}
          showIcon
          selected={value}
          onChange={onChange}
          placeholderText={placeholder}
          icon={
            <Icon
              width={12}
              height={12}
              name={timeOnly ? 'clock' : 'calendar'}
              className="fill-grey-300"
            />
          }
          minDate={!timeOnly ? new Date() : undefined}
          showTimeSelect={timeOnly}
          showTimeSelectOnly={timeOnly}
          timeIntervals={15}
          timeCaption="Time"
          dateFormat={timeOnly ? 'HH:mm' : 'dd-MM-yyyy'}
        />

        {error && <InputError id={datePickerId}>{error}</InputError>}
      </div>
    );
  },
);

export default AppDatePicker;
