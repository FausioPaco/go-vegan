import { useId } from 'react';
import cn from '@/utils/cn';
import { capitalize } from '@/utils/stringUtils';

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
  onClick,
  tabType = 'outline',
}: ITabItemProps) => {
  const tabItemId = useId();

  const getButtonClasses = (tabType: string, isActive: boolean) => {
    const baseClasses =
      'mb-2 flex w-full cursor-pointer items-center justify-center bg-transparent text-lg font-medium outline-primary-700';
    const typeClasses =
      tabType === 'outline'
        ? 'text-grey-500'
        : 'text-grey-500 border border-grey-300 p-2';

    let activeClasses = '';

    if (isActive && tabType === 'outline')
      activeClasses += 'text-primary-700 md:border-b-primary-700';
    if (isActive && tabType === 'bordered')
      activeClasses += 'bg-primary-700 border-primary-700 text-white';

    return cn(baseClasses, typeClasses, activeClasses);
  };

  return (
    <li
      role="presentation"
      className={cn('w-full', {
        'md:border-b-2 md:border-b-primary-600':
          tabType === 'outline' && isActive,
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
        onClick={onClick}
      >
        {capitalize(label)}
      </button>
    </li>
  );
};

export default TabItem;
