import cn from '@/utils/cn';
import { ComponentProps, forwardRef, useId } from 'react';
import { InputError } from '@/components/ui/input-error';

interface IInputProps extends ComponentProps<'input'> {
  label: string;
  error?: string;
  textTip?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, className, value, error, textTip, ...props }: IInputProps, ref) => {
    const inputId = useId();

    return (
      <div className="my-3">
        <label
          htmlFor={inputId}
          className="mb-1 block text-sm font-medium text-grey-800"
        >
          {label}
        </label>

        <input
          id={inputId}
          ref={ref}
          value={value}
          className={cn(
            'w-full rounded border border-grey-300 bg-transparent px-3 py-2 font-sans text-grey-700 outline-none transition duration-300 ease-in focus:border-primary-500 focus:shadow-md active:border-primary-600 active:shadow-md disabled:bg-grey-500',
            error && 'border-danger-600',
            className,
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />

        {error && <InputError id={inputId}>{error}</InputError>}
        {textTip && (
          <small className="text-label mt-2 block truncate text-xs font-medium text-grey-600">
            {textTip}
          </small>
        )}
      </div>
    );
  },
);

export default Input;
