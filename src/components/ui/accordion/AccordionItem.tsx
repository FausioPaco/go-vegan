import { PropsWithChildren } from 'react';
import cn from '@/utils/cn';
import { AnimatePresence, motion } from 'motion/react';
import { useAccordionContext } from './AccordionContext';
import { Icon } from '../icon';

type IAccordionItemProps = {
  id: number;
  className?: string;
  title: string;
};

const AccordionItem = ({
  id,
  className,
  title,
  children,
}: PropsWithChildren<IAccordionItemProps>) => {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <li
      className={cn('rounded border border-grey-200 p-4', className)}
      onClick={() => toggleItem(id)}
    >
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">{title}</h3>
        <Icon
          name="chevron-down"
          className={cn(
            'fill-grey-500 transition-transform ease-in-out group-hover:fill-primary-600',
            isOpen && 'rotate-180 fill-primary-700',
          )}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={id}
            initial={{ maxHeight: 0, opacity: 0 }}
            exit={{
              maxHeight: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            animate={{
              maxHeight: isOpen ? '90vh' : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeIn' }}
            className={cn(
              'overflow-hidden font-sans text-base',
              isOpen && 'pb-4 pt-3',
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default AccordionItem;
