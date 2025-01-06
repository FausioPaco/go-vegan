import { ComponentProps, PropsWithChildren } from 'react';
import { ButtonVariant, ButtonSize } from '@/types/Button';
import cn from '@/utils/cn';
import { IconName } from '@/types/Icon';
import { Icon } from '@/components/ui/icon';
import { Link } from 'react-router-dom';

type IButtonLinkProps = ComponentProps<'a'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: IconName;
  href: string;
};

const ButtonLink = ({
  variant = 'primary',
  size = 'md',
  href,
  className,
  icon,
  children,
  ...props
}: PropsWithChildren<IButtonLinkProps>) => {
  const buttonVariants = {
    primary:
      'rounded-full bg-gradient-to-t from-primary-600 to-primary-500 text-white hover:shadow-sm hover:shadow-primary-700/70 hover:-translate-y-1',
    secondary:
      'rounded-full border-primary-600 shadow-md border-2 text-primary-600 hover:bg-primary-600 hover:text-white hover:-translate-y-1',
    tertiary:
      'flex items-center gap-x-2 text-primary-700 underline outline-none hover:text-primary-800 font-medium',
  };

  const buttonSizes = {
    sm: 'px-3 py-2 text-sm md:text-base',
    md: 'px-6 py-3 text-lg md:text-xl',
    lg: 'px-8 py-4 text-xl md:text-2xl',
  };

  return (
    <Link
      to={href}
      className={cn(
        'block min-w-[220px] font-normal transition-all duration-300 focus:outline-none focus:ring focus:ring-primary-500',
        buttonVariants[variant],
        buttonSizes[size],
        icon && 'flex items-center gap-x-1',
        className,
      )}
      {...props}
    >
      {icon && <Icon name={icon} className="fill-white" />}
      {children}
    </Link>
  );
};

export default ButtonLink;
