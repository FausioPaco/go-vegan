import { PropsWithChildren } from 'react';
import cn from '@/utils/cn';
import { AnimatePresence, motion } from 'motion/react';
import { useAccordionContext } from './AccordionContext';

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
    <li className={cn('rounded border border-grey-200', className)}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={id}
            exit={{ opacity: 0, y: -0.2 }}
            className="pb-4 pt-3 font-sans text-base"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default AccordionItem;
