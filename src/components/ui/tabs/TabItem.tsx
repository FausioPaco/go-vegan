import { useId } from 'react';
import cn from '@/utils/cn';

type ITabItemProps = {
  label: string;
  tabPosition: number;
  totalTabs: number;
  isActive: boolean;
  tabType?: 'outline' | 'bordered';
  onClick: () => void;
};

const TabItem = ({
  label,
  tabPosition,
  totalTabs,
  isActive,
  tabType = 'outline',
}: ITabItemProps) => {
  const tabItemId = useId();

  const getButtonClasses = (tabType: string, isActive: boolean) => {
    const baseClasses =
      'mb-2 flex w-full cursor-pointer items-center justify-center  bg-transparent text-lg font-medium outline-primary-700';
    const typeClasses =
      tabType === 'outline'
        ? 'text-grey-700'
        : 'text-grey-500 border-2 border-grey-300 p-2';

    let activeClasses = 'font-bold ';

    if (isActive && tabType === 'outline') activeClasses += 'text-primary-700';
    if (isActive && tabType === 'bordered')
      activeClasses += 'bg-primary-700  text-white';

    return cn(baseClasses, typeClasses, activeClasses);
  };

  return (
    <li
      role="presentation"
      className={cn({
        'border-b-2 border-b-primary-600': tabType === 'outline',
        'border-2 border-grey-400': tabType === 'bordered',
      })}
    >
      <button
        className={getButtonClasses(tabType, isActive)}
        role="tab"
        aria-setsize={totalTabs}
        aria-posinset={tabPosition}
        tabIndex={0}
        aria-controls={tabItemId}
        aria-selected={isActive}
        aria-label={label}
      >
        {label}
      </button>
    </li>
  );
};

export default TabItem;
