import { createContext, PropsWithChildren, useContext, useState } from 'react';
import AccordionItem from './AccordionItem';

type AccordionContextType = {
  openItemId: number | undefined;
  toggleItem: (openItemId: number) => void;
};

type IAccordionProps = {
  className?: string;
};

const AccordionContext = createContext<AccordionContextType>(
  {} as AccordionContextType,
);

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx)
    throw new Error('Accordion components must be wrapped by <Accordion>');

  return ctx;
}

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
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
