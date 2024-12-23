import { ComponentProps, PropsWithChildren } from 'react';
import { ButtonVariant, ButtonSize } from '@/types/Button';
import cn from '@/utils/cn';
import { IconName } from '@/types/Icon';
import { Icon } from '@/components/ui/icon';

type IButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: IconName;
  iconPosition?: 'right' | 'left';
  ariaLabel?: string;
  readonly?: boolean;
};

const Button = ({
  variant = 'primary',
  size = 'md',
  iconPosition = 'left',
  className,
  icon,
  ariaLabel,
  readonly = false,
  children,
  ...props
}: PropsWithChildren<IButtonProps>) => {
  const buttonVariants = {
    primary:
      'rounded-full bg-gradient-to-t from-primary-600 to-primary-500 text-white hover:shadow-sm hover:shadow-primary-700/70 hover:-translate-y-1',
    secondary:
      'rounded-full border-primary-600 shadow-md border-2 text-primary-600 hover:bg-primary-600 hover:text-white hover:-translate-y-1',
    tertiary:
      'flex items-center gap-x-2 text-primary-700 underline outline-none hover:text-primary-800',
  };

  const buttonSizes = {
    sm: 'px-3 py-2 text-sm md:text-base',
    md: 'px-6 py-3 text-lg md:text-xl',
    lg: 'px-8 py-4 text-xl md:text-2xl',
  };

  return (
    <button
      className={cn(
        'group min-w-[96px] font-medium transition-all duration-300 focus:outline-none focus:ring focus:ring-primary-500',
        buttonVariants[variant],
        buttonSizes[size],
        icon && !readonly && 'flex items-center gap-x-2',
        className,
      )}
      aria-label={ariaLabel || undefined}
      title={ariaLabel || undefined}
      {...props}
    >
      {icon && !readonly && iconPosition == 'left' && (
        <Icon
          name={icon}
          className={
            variant === 'primary'
              ? 'fill-white'
              : 'fill-primary-600 group-hover:fill-white'
          }
        />
      )}
      <span>{children}</span>
      {icon && !readonly && iconPosition == 'right' && (
        <Icon
          name={icon}
          className={
            variant === 'primary'
              ? 'fill-white'
              : 'fill-primary-700 group-hover:fill-white'
          }
        />
      )}
    </button>
  );
};

export default Button;
