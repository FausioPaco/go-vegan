import { useSVGImport } from '@/hooks/useSVGImport';
import { IconProps } from '@/types/Icon';

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
