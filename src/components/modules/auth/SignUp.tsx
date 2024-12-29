import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loading } from '@/components/ui/loading';
import { login } from '@/store/reducers/userReducer';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

type SignUpInputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type ISignUpForm = {
  onFinish: () => void;
  onSignIn: () => void;
};

const SignUp = ({ onFinish, onSignIn }: ISignUpForm) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>();

  const password = watch('password');

  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    setIsSubmiting(true);
    dispatch(login({ name: data.name, email: data.email }));

    setTimeout(() => {
      onFinish();
    }, 1000);
  };

  return (
    <div className="my-4 flex w-full flex-col items-center justify-center px-4">
      <div className="w-full md:max-w-[40%]">
        <div className="my-8 flex w-full flex-col items-center text-center">
          <h3 className="text-3xl font-bold text-grey-600 md:text-4xl">
            Set up account
          </h3>
          <p className="mt-3 text-lg text-grey-500">
            Already have an account?{' '}
            <span
              onClick={onSignIn}
              className="cursor-pointer text-primary-600 underline"
            >
              Click here
            </span>{' '}
            to sign in
          </p>
        </div>

        <form
          className="mt-2"
          aria-busy={isSubmiting}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Name:"
            type="text"
            {...register('name', {
              required: 'Your name is required',
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: 'Must be a valid name',
              },
            })}
            placeholder="Enter your full name"
            error={errors.name?.message}
            readOnly={isSubmiting}
          />

          <Input
            label="Email:"
            type="email"
            {...register('email', {
              required: 'Your name is required',
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
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
            placeholder="Enter your password"
            error={errors.password?.message}
          />

          <Input
            label="Confirm password:"
            type="password"
            {...register('passwordConfirm', {
              required: 'You must confirm your password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
            placeholder="Re-enter your password"
            error={errors.passwordConfirm?.message}
          />

          <Button
            type="submit"
            onClick={() => onSubmit}
            readonly={isSubmiting}
            aria-readonly={isSubmiting}
            className="mt-5"
            icon="arrow-right"
            iconPosition="right"
          >
            {isSubmiting ? <Loading size="sm" /> : 'Next step'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
