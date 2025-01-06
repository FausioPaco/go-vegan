import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loading } from '@/components/ui/loading';
import { login } from '@/store/reducers/userReducer';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

type LoginInputs = {
  email: string;
  password: string;
};

type ILoginForm = {
  onFinish: () => void;
  onSignUp: () => void;
};

const Login = ({ onFinish, onSignUp }: ILoginForm) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    setIsSubmiting(true);
    dispatch(login({ name: 'John Doe', email: data.email }));
    onFinish();
  };

  return (
    <div className="my-4 flex w-full flex-col items-center justify-center px-4">
      <div className="w-full md:max-w-[40%]">
        <div className="my-8 flex w-full flex-col items-center gap-y-2 text-center">
          <h3 className="text-3xl font-bold text-grey-600 md:text-4xl">
            Welcome back!
          </h3>
          <p className="text-lg text-grey-500">
            Log in to create your vegan order
          </p>
        </div>

        <form
          className="mt-2"
          aria-busy={isSubmiting}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Email:"
            type="email"
            {...register('email', {
              required: 'Your email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Must be a valid email',
              },
            })}
            placeholder="Enter your email"
            error={errors.email?.message}
          />

          <Input
            label="Password:"
            type="password"
            {...register('password', {
              required: 'Your password is required',
            })}
            placeholder="Enter your password"
            error={errors.password?.message}
          />

          <div className="flex space-x-2">
            <Button
              size="md"
              type="submit"
              onClick={() => handleSubmit(onSubmit)}
              aria-readonly={isSubmiting}
              readonly={isSubmiting}
              className="mt-5"
              icon="arrow-right"
              iconPosition="right"
            >
              {isSubmiting ? <Loading size="sm" /> : 'Next step'}
            </Button>

            <Button
              size="md"
              variant="secondary"
              type="button"
              onClick={onSignUp}
              aria-readonly={isSubmiting}
              disabled={isSubmiting}
              className="mt-5"
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
