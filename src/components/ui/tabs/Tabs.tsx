import cn from '@/utils/cn';
import { PropsWithChildren, useId } from 'react';

type ITabsProps = {
  tabType: 'outline' | 'bordered';
};

const Tabs = ({
  tabType = 'outline',
  children,
}: PropsWithChildren<ITabsProps>) => {
  const tabId = useId();
  return (
    <section
      id={tabId}
      className="mt-6 overflow-hidden"
      aria-multiselectable="false"
    >
      <ul
        className={cn(
          'items-between flex w-full flex-col gap-y-3 md:flex-row md:justify-around md:gap-x-3 md:gap-y-0',
          tabType === 'outline' && 'md:border-b md:border-b-grey-300',
        )}
        role="tablist"
      >
        {children}
      </ul>
    </section>
  );
};

export default Tabs;
