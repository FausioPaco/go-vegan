import { ComponentProps } from 'react';
import cn from '@/utils/cn';

type Option = Omit<ComponentProps<'option'>, 'children'> & {
  value: string | number;
  label: string | number;
};

type ISelectProps = ComponentProps<'select'> & {
  id: string;
  label: string;
  value: string | number;
  options: Option[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  ariaLabel?: string;
  error?: string;
};

const Select = ({
  id,
  label,
  value,
  options,
  onChange,
  ariaLabel,
  error,
  ...props
}: ISelectProps) => {
  return (
    <div className="my-3">
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-grey-800"
      >
        {label}
      </label>
      <select
        id={id}
        aria-label={ariaLabel}
        aria-describedby={error ? `error-${id}` : undefined}
        value={value}
        onChange={onChange}
        className={cn(
          'w-full rounded border border-grey-300 bg-transparent px-3 py-2 font-sans text-grey-700 outline-none transition duration-300 ease-in focus:border-primary-500 focus:shadow-md active:border-primary-600 active:shadow-md disabled:bg-grey-500',
          error && 'border-danger-600',
        )}
        {...props}
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p
          id={`error-${id}`}
          aria-live="assertive"
          className="text-label animate-fadeIn mt-2 flex items-center truncate text-sm font-medium text-danger-600"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
