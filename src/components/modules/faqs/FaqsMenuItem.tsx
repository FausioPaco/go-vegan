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
          'flex w-full space-x-4 p-4 text-left text-lg font-medium text-grey-500 focus:outline-none',
          isActive && 'rounded bg-primary-25 text-primary-700',
        )}
        aria-expanded={isActive}
        aria-controls={`faq-${category}`}
        onClick={onClick}
      >
        <Icon
          name={category.icon}
          className={cn('fill-grey-500', isActive && 'fill-primary-700')}
        />
        {capitalize(category.title)}
      </button>
    </li>
  );
};

export default FaqsMenuItem;
