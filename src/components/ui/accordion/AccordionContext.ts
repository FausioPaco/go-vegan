import { createContext, useContext } from 'react';

export type AccordionContextType = {
  openItemId: number | undefined;
  toggleItem: (openItemId: number) => void;
};

export const AccordionContext = createContext<AccordionContextType>(
  {} as AccordionContextType,
);

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx)
    throw new Error('Accordion components must be wrapped by <Accordion>');

  return ctx;
}
