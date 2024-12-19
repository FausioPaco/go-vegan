import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import { useId } from 'react';

type IDatepickerProps = {
  value: Date | null;
  onChange: (date: Date | null) => void;
  label?: string;
  placeholder?: string;
};

const AppDatePicker = ({
  value,
  onChange,
  label = 'Date:',
  placeholder = 'Select the date of the order',
}: IDatepickerProps) => {
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
        showIcon
        selected={value}
        onChange={onChange}
        placeholderText={placeholder}
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6201 3.70004H12.0201V3.06004C12.0201 2.7066 11.7335 2.42004 11.3801 2.42004C11.0267 2.42004 10.7401 2.7066 10.7401 3.06004V3.70004H9.1401V3.06004C9.1401 2.7066 8.85354 2.42004 8.5001 2.42004C8.14666 2.42004 7.8601 2.7066 7.8601 3.06004V3.70004H6.2601V3.06004C6.2601 2.7066 5.97354 2.42004 5.6201 2.42004C5.26666 2.42004 4.9801 2.7066 4.9801 3.06004V3.70004H3.3801C2.67322 3.70004 2.1001 4.27316 2.1001 4.98004V12.98C2.1001 13.6869 2.67322 14.26 3.3801 14.26H13.6201C14.327 14.26 14.9001 13.6869 14.9001 12.98V4.98004C14.9001 4.27316 14.327 3.70004 13.6201 3.70004ZM13.6201 12.98H3.3801V4.98004H4.9801V5.30004C4.9801 5.65348 5.26666 5.94004 5.6201 5.94004C5.97354 5.94004 6.2601 5.65348 6.2601 5.30004V4.98004H7.8601V5.30004C7.8601 5.65348 8.14666 5.94004 8.5001 5.94004C8.85354 5.94004 9.1401 5.65348 9.1401 5.30004V4.98004H10.7401V5.30004C10.7401 5.65348 11.0267 5.94004 11.3801 5.94004C11.7335 5.94004 12.0201 5.65348 12.0201 5.30004V4.98004H13.6201V12.98Z"
              fill="#939693"
            />
            <path
              d="M12.0203 10.74H4.98033C4.62689 10.74 4.34033 11.0266 4.34033 11.38C4.34033 11.7334 4.62689 12.02 4.98033 12.02H12.0203C12.3738 12.02 12.6603 11.7334 12.6603 11.38C12.6603 11.0266 12.3738 10.74 12.0203 10.74Z"
              fill="#939693"
            />
            <path
              d="M12.0203 8.82007H4.98033C4.62689 8.82007 4.34033 9.10663 4.34033 9.46007C4.34033 9.81351 4.62689 10.1001 4.98033 10.1001H12.0203C12.3738 10.1001 12.6603 9.81351 12.6603 9.46007C12.6603 9.10663 12.3738 8.82007 12.0203 8.82007Z"
              fill="#939693"
            />
            <path
              d="M12.0203 6.90002H4.98033C4.62689 6.90002 4.34033 7.18658 4.34033 7.54002C4.34033 7.89346 4.62689 8.18002 4.98033 8.18002H12.0203C12.3738 8.18002 12.6603 7.89346 12.6603 7.54002C12.6603 7.18658 12.3738 6.90002 12.0203 6.90002Z"
              fill="#939693"
            />
          </svg>
        }
        minDate={new Date()}
      />
    </div>
  );
};

export default AppDatePicker;
