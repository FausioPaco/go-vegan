import { PropsWithChildren } from 'react';
import { useAccordionContext } from './Accordion';
import cn from '@/utils/cn';
import { motion } from 'motion/react';

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
      <motion.div>{children}</motion.div>
    </li>
  );
};

export default AccordionItem;
