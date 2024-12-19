import cn from '@/utils/cn';
import { ComponentProps, forwardRef, useEffect, useId, useState } from 'react';
import { InputError } from '../input-error';

type IRangeBarProps = ComponentProps<'input'> & {
  label: string;
  error?: string;
  className?: string;
  value: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const RangeBar = forwardRef<HTMLInputElement, IRangeBarProps>(
  ({ label, error, className, onChange, value = 10 }: IRangeBarProps, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [rangePercentage, setRangePercentage] = useState(0);
    const inputId = useId();

    useEffect(() => {
      setRangePercentage((value * 100) / 20);
    }, [value]);

    return (
      <div className="flex w-full flex-col items-center space-y-4">
        <div className="relative w-full">
          <div
            className={`absolute left-1/2 -translate-x-1/2 -translate-y-2 transform rounded-md bg-primary-600 px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ left: `${rangePercentage - 2}%` }}
          >
            {value}

            <div className="absolute bottom-[-4px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-primary-600"></div>
          </div>
          <label
            htmlFor={inputId}
            className="mb-1 block text-sm font-medium text-grey-800"
          >
            {label}
          </label>
          <input
            id={inputId}
            ref={ref}
            type="range"
            min="1"
            max="20"
            value={value}
            onChange={onChange}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
              'h-2 w-full cursor-pointer appearance-none rounded-lg bg-primary-500/20 accent-white hover:accent-primary-700 focus:outline-none',
              '[&::-webkit-slider-thumb]:size-[40px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md',
              className,
            )}
            style={{
              background: `linear-gradient(to right, #4caf50 ${rangePercentage - 1}%, rgb(75 178 72 / 0.2) ${rangePercentage - 1}%)`,
            }}
          />

          <div className="flex justify-between">
            <p className="text-sm">Min: 1</p>
            <p className="text-sm">Max: 20</p>
          </div>
        </div>

        {error && <InputError id={inputId}>{error}</InputError>}
      </div>
    );
  },
);

export default RangeBar;
