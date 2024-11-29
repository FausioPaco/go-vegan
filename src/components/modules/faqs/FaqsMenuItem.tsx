import { Icon } from '@/components/ui/icon';
import { FaqCategory } from '@/types/Faq';
import cn from '@/utils/cn';
import { capitalize } from '@/utils/stringUtils';

type IFaqsMenuItemProps = {
  category: FaqCategory;
  isActive: boolean;
  onClick: () => void;
};

const FaqsMenuItem = ({ category, isActive, onClick }: IFaqsMenuItemProps) => {
  return (
    <li>
      <button
        className={cn(
          'group flex w-full space-x-4 p-4 text-left text-lg font-medium text-grey-500 hover:rounded hover:bg-primary-25 hover:text-primary-600',
          isActive && 'rounded bg-primary-25 text-primary-700',
        )}
        aria-expanded={isActive}
        aria-controls={`faq-${category.id}`}
        onClick={onClick}
      >
        <Icon
          name={category.icon}
          className={
            isActive
              ? 'fill-primary-700'
              : 'fill-grey-500 group-hover:fill-primary-600'
          }
        />
        <span>{capitalize(category.title)}</span>
      </button>
    </li>
  );
};

export default FaqsMenuItem;
