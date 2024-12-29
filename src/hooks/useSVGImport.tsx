import { FC, useEffect, useRef, useState, SVGProps } from 'react';

export function useSVGImport(iconName: string) {
  const importedIconRef = useRef<FC<SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);

    const importSvgIcon = async (): Promise<void> => {
      try {
        importedIconRef.current = (
          await import(`@/assets/icons/${iconName}.svg`)
        ).ReactComponent;
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    importSvgIcon();
  }, [iconName]);

  return { error, loading, SvgIcon: importedIconRef.current };
}
