import { ComponentProps } from 'react';

export type Option = Omit<ComponentProps<'option'>, 'children'> & {
  value: string | number;
  label: string | number;
};
