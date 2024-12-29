import { useState } from 'react';
import { Login, SignUp } from '../auth';
import { motion } from 'motion/react';

type IOrderAccountProps = {
  onFinish: () => void;
};

const OrderAccountStep = ({ onFinish }: IOrderAccountProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>('signup');

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
      }}
    >
      {mode === 'signup' ? (
        <SignUp onSignIn={() => setMode('login')} onFinish={onFinish} />
      ) : (
        <Login onSignUp={() => setMode('signup')} onFinish={onFinish} />
      )}
    </motion.section>
  );
};

export default OrderAccountStep;
