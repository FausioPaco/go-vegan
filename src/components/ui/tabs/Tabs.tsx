import cn from '@/utils/cn';
import { PropsWithChildren, useId } from 'react';

type ITabsProps = {
  tabType?: 'outline' | 'bordered';
  className?: string;
};

const Tabs = ({
  tabType = 'outline',
  className,
  children,
}: PropsWithChildren<ITabsProps>) => {
  const tabId = useId();

  const getTabClasses = (tabType: string) => {
    const baseClasses =
      'items-between flex w-full flex-col gap-y-3 md:flex-row md:justify-around md:gap-x-3 md:gap-y-0';

    const typeClasses =
      tabType === 'outline'
        ? 'text-grey-700 md:border-b md:border-grey-100'
        : 'text-grey-500  p-2';

    return cn(baseClasses, typeClasses);
  };

  return (
    <section
      id={tabId}
      data-testid="tabs"
      className={cn('mt-6 w-full overflow-hidden', className)}
      aria-multiselectable="false"
    >
      <ul className={getTabClasses(tabType)} role="tablist">
        {children}
      </ul>
    </section>
  );
};

export default Tabs;
