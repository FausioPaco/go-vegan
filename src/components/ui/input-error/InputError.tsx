import { PropsWithChildren } from 'react';

type IInputErrorProps = {
  id: string;
};

const InputError = ({ id, children }: PropsWithChildren<IInputErrorProps>) => {
  return (
    <p
      id={`error-${id}`}
      aria-live="assertive"
      className="text-label animate-fadeIn mt-2 flex items-center truncate text-sm font-medium text-danger-600"
    >
      {children}
    </p>
  );
};

export default InputError;
