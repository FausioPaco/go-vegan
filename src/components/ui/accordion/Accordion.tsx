import { PropsWithChildren, useState } from 'react';
import AccordionItem from './AccordionItem';
import { AccordionContext, AccordionContextType } from './AccordionContext';
import cn from '@/utils/cn';

type IAccordionProps = {
  className?: string;
};

const Accordion = ({
  children,
  className,
}: PropsWithChildren<IAccordionProps>) => {
  const [openItemId, setOpenItemId] = useState<number | undefined>();

  function toggleItem(itemId: number) {
    setOpenItemId((prevId) => (prevId === itemId ? undefined : itemId));
  }

  const contextValue: AccordionContextType = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul
        className={cn(
          'animate-fadeIn flex cursor-pointer flex-col gap-y-4 pl-0',
          className,
        )}
      >
        {children}
      </ul>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
