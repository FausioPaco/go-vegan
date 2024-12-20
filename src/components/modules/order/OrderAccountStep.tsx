import { useState } from 'react';
import { Login, SignUp } from '../auth';

type IOrderAccountProps = {
  onFinish: () => void;
};

const OrderAccountStep = ({ onFinish }: IOrderAccountProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>('signup');

  return (
    <>
      {mode === 'signup' ? (
        <SignUp onSignIn={() => setMode('login')} onFinish={onFinish} />
      ) : (
        <Login onSignUp={() => setMode('signup')} onFinish={onFinish} />
      )}
    </>
  );
};

export default OrderAccountStep;
