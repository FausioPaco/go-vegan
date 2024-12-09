import { Input } from '@/components/ui/input';
import { Option } from '@/types/Select';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Select } from '@/components/ui/select';
import { TextArea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Loading } from '@/components/ui/loading';

const SUBJECTS = [
  { label: 'Orders', value: 'Orders' },
  { label: 'Menu', value: 'Menu' },
  { label: 'Other', value: 'Other' },
] as Option[];

type ContactInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInputs>();

  const onSubmit: SubmitHandler<ContactInputs> = (data) => {
    setIsSubmiting(true);
    console.log(data);
  };

  return (
    <div className="flex flex-col space-y-2 px-4">
      <p className="mb-2 text-grey-500">
        Please fill out our contact form and we will get back to you shortly.
      </p>
      <form aria-busy={isSubmiting} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name:"
          type="text"
          {...register('name', {
            required: 'Your name is required',
            pattern: {
              value: /^[A-Za-z]+$/i,
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
        <Select
          label="Subject:"
          options={SUBJECTS}
          defaultValue="Orders"
          {...register('subject', {
            required: 'The subject is required',
          })}
          error={errors.subject?.message}
          aria-readonly={isSubmiting}
        />

        <TextArea
          label="Message:"
          rows={8}
          {...register('name', {
            required: 'Your message is required',
          })}
          placeholder="Describe your message here"
          error={errors.name?.message}
          readOnly={isSubmiting}
        />

        <Button
          type="submit"
          onClick={() => onSubmit}
          aria-readonly={isSubmiting}
        >
          {isSubmiting ? <Loading size="sm" /> : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
