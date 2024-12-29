import { useSVGImport } from '@/hooks/useSVGImport';
import { IconName } from '@/types/Icon';
import { ComponentProps } from 'react';

type IconProps = ComponentProps<'svg'> & {
  name: IconName;
};

const Icon = ({ name, ...props }: IconProps) => {
  const { loading, SvgIcon } = useSVGImport(name);

  return (
    <>
      {loading && (
        <div className="bg-slate-400 animate-pulse h-8 w-8 rounded-full"></div>
      )}
      {SvgIcon && <SvgIcon {...props} />}
    </>
  );
};

export default Icon;
