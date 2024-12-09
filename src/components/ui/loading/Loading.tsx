import cn from '@/utils/cn';

type ILoadingProps = {
  message?: string;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'primary';
};

export const Loading = ({
  orientation = 'vertical',
  size = 'md',
  color = 'white',
  message,
}: ILoadingProps) => {
  const loadingSizes = {
    sm: 'size-[20px]',
    md: 'size-[28px]',
    lg: 'size-[40px]',
  };

  const loadingColors = {
    white: 'border-white',
    primary: 'border-primary-600',
  };

  return (
    <div
      role="status"
      className={cn(
        'relative animate-fadeIn',
        orientation === 'vertical' && 'flex flex-col items-center',
      )}
    >
      <span
        className={cn(
          'animate-spinner border-[rgba(255, 255, 255, 0)] relative block rounded-full border-l-2 border-t-2 border-solid border-r-transparent',
          loadingSizes[size],
          loadingColors[color],
        )}
      >
        <span className="sr-only">{message || 'Loading, please wait..'}</span>
      </span>

      {message && (
        <p
          aria-live="polite"
          className={cn(
            'animate-blink font-bold text-primary-600',
            orientation === 'horizontal' && 'ml-1',
          )}
        ></p>
      )}
    </div>
  );
};

export default Loading;
