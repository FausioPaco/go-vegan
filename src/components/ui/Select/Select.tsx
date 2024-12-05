import { ComponentProps, forwardRef, useId } from 'react';
import cn from '@/utils/cn';
import { InputError } from '@/components/ui/input-error';
import { Option } from '@/types/Select';

interface ISelectProps extends ComponentProps<'select'> {
  label: string;
  options: Option[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  ariaLabel?: string;
  error?: string;
  textTip?: string;
  className?: string;
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  (
    {
      label,
      value,
      options,
      onChange,
      ariaLabel,
      className,
      error,
      textTip,
      ...props
    }: ISelectProps,
    ref,
  ) => {
    const selectId = useId();

    return (
      <div className="my-3">
        <label
          htmlFor={selectId}
          className="mb-1 block text-sm font-medium text-grey-800"
        >
          {label}
        </label>
        <select
          id={selectId}
          ref={ref}
          aria-label={ariaLabel}
          aria-describedby={error ? `error-${selectId}` : undefined}
          value={value}
          onChange={onChange}
          className={cn(
            'w-full rounded border border-grey-300 bg-transparent px-3 py-2 font-sans text-grey-700 outline-none transition duration-300 ease-in focus:border-primary-500 focus:shadow-md active:border-primary-600 active:shadow-md disabled:bg-grey-500',
            error && 'border-danger-600',
            className,
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
        {error && <InputError id={selectId}>{error}</InputError>}

        {textTip && (
          <small className="text-label mt-2 block truncate text-xs font-medium text-grey-600">
            {textTip}
          </small>
        )}
      </div>
    );
  },
);

export default Select;
