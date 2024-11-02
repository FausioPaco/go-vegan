import { useSVGImport } from '@/hooks/useSVGImport';
import { ComponentProps } from 'react';

type IconProps = ComponentProps<'svg'> & {
  name:
    | 'animals'
    | 'arrow-left'
    | 'arrow-right'
    | 'better-world'
    | 'chevron-down'
    | 'eco-friendly'
    | 'facebook'
    | 'instagram'
    | 'twitter'
    | 'healthcare'
    | 'location'
    | 'user';
};

const Icon = ({ name, ...props }: IconProps) => {
  const { loading, SvgIcon } = useSVGImport(name);

  return (
    <>
      {loading && (
        <div className="bg-slate-400 h-8 w-8 animate-pulse rounded-full"></div>
      )}
      {SvgIcon && <SvgIcon {...props} />}
    </>
  );
};

export default Icon;
