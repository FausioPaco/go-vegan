import { PropsWithChildren } from 'react';

type IInputErrorProps = {
  id: string;
};

const InputError = ({ id, children }: PropsWithChildren<IInputErrorProps>) => {
  return (
    <p
      id={`error-${id}`}
      role="alert"
      aria-live="assertive"
      className="text-label mt-2 flex animate-fadeIn items-center truncate text-sm font-medium text-danger-600"
    >
      {children}
    </p>
  );
};

export default InputError;
