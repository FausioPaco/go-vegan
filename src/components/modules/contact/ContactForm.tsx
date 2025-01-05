import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Option } from '@/types/Select';
import { Select } from '@/components/ui/select';
import { TextArea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { ContactInput } from '@/types/Contact';

const SUBJECTS = [
  { label: 'Orders', value: 'Orders' },
  { label: 'Menu', value: 'Menu' },
  { label: 'Other', value: 'Other' },
] as Option[];

type IContactForm = {
  onFinish: () => void;
};

const ContactForm = ({ onFinish }: IContactForm) => {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>();

  const onSubmit: SubmitHandler<ContactInput> = (data) => {
    setIsSubmiting(true);
    console.log(data);
    onFinish();
    // setTimeout(() => {

    // }, 1000);
  };

  return (
    <div className="flex animate-fadeIn flex-col space-y-2 px-4">
      <p className="mb-2 text-grey-500">
        Please fill out our contact form and we will get back to you shortly.
      </p>
      <form
        data-testid="contact-form"
        aria-busy={isSubmiting}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Name:"
          type="text"
          {...register('name', {
            required: 'Your name is required',
          })}
          placeholder="Enter your full name"
          error={errors.name?.message}
          readOnly={isSubmiting}
        />

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
          {...register('message', {
            required: 'Your message is required',
          })}
          placeholder="Describe your message here"
          error={errors.message?.message}
          readOnly={isSubmiting}
        />

        <Button
          size="md"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          aria-readonly={isSubmiting}
        >
          {isSubmiting ? <Loading size="sm" /> : 'Send message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
